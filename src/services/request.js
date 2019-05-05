import CONFIG from '../config';


export default function request(url, options) {
   const urlWithApiKey = `${url}&apikey=${CONFIG.API_KEY}&format=jsonp&callback=callback`;
   const optionsWithDefaults = {...options, headers: {"Content-Type": "application/json"}, mode: "cors"};

   return fetch(urlWithApiKey, optionsWithDefaults).then((response) => response.json());
}
