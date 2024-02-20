import { BASE_URLS } from "./urls";

export default async function createData(newStudent) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  };

  // console.log(BASE_URL + "/" + id); // students/57
  try {
    const res = await fetch(BASE_URLS, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
