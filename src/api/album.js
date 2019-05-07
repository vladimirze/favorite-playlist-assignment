import CONFIG from '../config';
import request from '../services/request';


const albumResource = {
   getAlbum(albumId) {
      return request(`${CONFIG.BASE_ENDPOINT}/album.get?album_id=${albumId}`)
         .then(response => {
            return response.album;
         })
   }
};

export default albumResource;
