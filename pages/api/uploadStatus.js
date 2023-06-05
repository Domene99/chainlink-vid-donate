import url from "url";
export default async function handler(req, res) {
  const { query } = url.parse(req.url, true);

  // Extract the id parameter from the query object
  const id = query.id;

  const options = {
    method: "GET",
    headers: {
      "x-tva-sa-id": process.env.NEXT_PUBLIC_SA_ID,
      "x-tva-sa-secret": process.env.NEXT_PUBLIC_SA_SECRET,
    },
  };
  let response = await fetch(
    `https://api.thetavideoapi.com/video/${id}`,
    options
  );
  var result = await response.json();

  res.status(200).json({ done: result.status == "success" });
}
