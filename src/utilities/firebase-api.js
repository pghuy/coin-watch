let URL =
  "https://coin-watch-2nd-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getFavContent() {
  const response = await fetch(`${URL}/fav.json`);
  const data = response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the fav content");
  }
  return data;
}

export async function pushFavContent(favData) {
  const response = await fetch(`${URL}/fav.json`, {
    method: "POST",
    body: JSON.stringify(favData),
    headers: { 'Content-Type': 'application/json', },   // Chú ý header sai là không sent request được 
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fav");
  }
  console.log("SENT");
  return null;
}
