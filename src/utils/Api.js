import axios from "axios";
const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 40,
  },
  headers: {
    "X-RapidAPI-Key": `9d88d4ca3bmsh622e04cf057bc4ep106e28jsn0b6940545598`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function Api(url) {
  const { data } = await axios.get(`${URL}/${url}`, options);
  //  baseUrl/getVideos

  return data;
}
