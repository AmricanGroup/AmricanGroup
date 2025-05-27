import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://serpapi.com/search.json";
const apiKey = "295dfe546c4798c925ed63829cc4ba66e4baaa66ec1293a280abe331a80cd911";

export const searchApi = async (word) => {
  const response = await axios.get(proxyUrl + baseUrl, {
    params: {
      q: word,
      hl: "en",
      gl: "eg",
      api_key: apiKey,
    },
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
  console.log(response?.data?.organic_results);
  return response.data;
  
};

