const playlistService = {
   key: 'playlist',

   load() {
      try {
         return JSON.parse(localStorage.getItem(this.key)) || [];
      } catch (error) {
         return [];
      }
   },

   save(item) {
      localStorage.setItem(this.key, JSON.stringify(item));
   }
};

export default playlistService;
