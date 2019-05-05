import CONFIG from '../config';
import request from '../services/request';


const trackResource = {
   findTrack(queryParams) {
      const params = new URLSearchParams(queryParams);
      return request(`${CONFIG.BASE_ENDPOINT}/track.search?${params.toString()}`)
         .then(response => {
            return response.track_list;
         })
   }
};

export default trackResource;
