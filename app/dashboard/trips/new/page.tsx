import { getSession } from "@/app/lib/auth";
import CreateTripForm from "@/app/ui/components/CreateTripForm";
import { redirect } from "next/navigation";

export default async function NewTrip() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const headlineText = "Let's go somewhere";
  const subText = "What are the big picture plans?";

  return (
    <div className="pb-mobile-nav-4">
      <div className="bg-gray-50 px-6 py-4 pb-8 mb-4 text-center drop-shadow-sm rounded-b-full">
        <h3 className="text-black font-bold text-lg">{headlineText}</h3>
        <p className="text-sm">{subText}</p>
      </div>
      <div>
        <CreateTripForm
          createdBy={session.user.user_id}
          token={session.user.token}
        />
      </div>
    </div>
  );
}
