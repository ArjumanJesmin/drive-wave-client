"use server";

export async function signUpUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = await JSON.stringify(Object.fromEntries(formData));
    const res = await fetch(`${process.env.serverUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
