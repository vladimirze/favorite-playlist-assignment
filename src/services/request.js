import CONFIG from '../config';


export default function request(url, options) {
   const urlWithApiKey = `${url}&apikey=${CONFIG.API_KEY}&format=jsonp&callback=jsonp`;
   const optionsWithDefaults = {...options, mode: "cors"};

   return fetch(urlWithApiKey, optionsWithDefaults)
         .then(response => {
            return response.text();
         })
         .then(response => {
            // NOTE: Looks like API works with JSONP.
            // strip 'callback(' and ');' and parse to JSON.
            return JSON.parse(response.slice(6, response.length-2));
         })
         .then(response => {
            const statusCode = response.message.header.status_code;
            if (!response.message.header || statusCode >= 400) {
               throw response.message && response.message.header;
            } else {
               return response.message.body;
            }
         });
}
