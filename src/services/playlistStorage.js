import storageFactory from "./storageFactory";

const playlistService = {
   key: 'playlist',

   ...storageFactory([]),

   findTrack(trackId) {
      const tracks = this.load();
      return tracks.find(track => track.track_id === trackId);
   },

   numericSort(field) {
      return function(trackA, trackB) {
         return trackA[field] - trackB[field];
      }
   },

   alphabeticalSort(field) {
      return function(trackA, trackB) {
         const [lowerCaseFieldA, lowerCaseFieldB] = [trackA[field].toLowerCase(), trackB[field].toLowerCase()];

         if (lowerCaseFieldA < lowerCaseFieldB) {
            return -1;
         } else if (lowerCaseFieldA > lowerCaseFieldB) {
            return 1;
         } else {
            return 0;
         }
      }
   },

   sortBy(playlist, field) {
      let sortFn;
      if (field === 'added_at') {
         sortFn = this.numericSort(field);
      } else {
         sortFn = this.alphabeticalSort(field);
      }

      return playlist.sort(sortFn);
   }
};

export default playlistService;
