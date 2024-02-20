import { BASE_URLS } from "./urls";

export default async function updateData(newStudent) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  };
  try {
    const res = await fetch(BASE_URLS + "/" + newStudent.id, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
