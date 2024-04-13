type Options = {
  method?: string;
  body?: any;
};

export const api = async (endpoint: string, options: Options) => {
  const defaultOptions = {
    method: "GET",
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      {
        ...defaultOptions,
        ...options,
      },
    );

    if (!response.ok) {
      return {
        ...response,
        data: null,
        error: { status: response.status, statusText: response.statusText },
      };
    }

    const data = await response.json();

    return { ...response, data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error };
  }
};
