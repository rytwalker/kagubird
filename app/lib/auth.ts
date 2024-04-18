import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { api } from "./api";

const key = new TextEncoder().encode(process.env.NEXT_PUBLIC_SIGN);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 day from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { data, error } = await api("/v1/tokens/authentication", {
    body: JSON.stringify(payload),
    method: "POST",
  });

  if (error) {
    return;
  }

  const { user_id, token, expiry } = data.authentication_token;
  const user = {
    email: formData.get("email"),
    user_id,
    token,
    expiry,
  };

  const expires = new Date(expiry);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires });
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(parsed.expires);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    expires: parsed.expires,
  });
  return res;
}
