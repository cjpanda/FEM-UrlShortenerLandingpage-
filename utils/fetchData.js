import axios from "axios";

const fetchData = async (url) => {
  try {
    const res = await axios.post(
      "https://url-shortener23.p.rapidapi.com/shorten",
      { url },
      {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
        },
      }
    );

    return res.data.short_url;
  } catch (error) {
    console.error(error);
    throw new Error("Error shortening URL. Please try again.");
  }
};

export default fetchData;
