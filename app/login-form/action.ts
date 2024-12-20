"use server";

export async function handleForm(state: unknown, formData: FormData) {
  console.log({ state });
  const password = formData.get("password");
  if (password === "12345") {
    return {
      ok: true,
    };
  } else {
    return {
      error: "wrong password",
      prevData: {
        email: formData.get("email")?.toString(),
        username: formData.get("username")?.toString(),
      },
    };
  }
}
