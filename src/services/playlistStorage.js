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
   },

   findTrack(trackId) {
      const tracks = this.load();
      return tracks.find(track => track.track_id === trackId);
   }
};

export default playlistService;
