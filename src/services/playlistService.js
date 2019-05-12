import storageFactory from "./storageFactory";

const playlistService = {
   key: 'playlist',

   ...storageFactory([]),

   findTrack(trackId) {
      const tracks = this.load();
      return tracks.find(track => track.track_id === trackId);
   },

   numericalSort(field, order='ascending') {
      return function(trackA, trackB) {
         return order === 'ascending' ? trackA[field] - trackB[field] : trackB[field] - trackA[field];
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
         sortFn = this.numericalSort(field, 'desc');
      } else {
         sortFn = this.alphabeticalSort(field);
      }

      return playlist.sort(sortFn);
   }
};

export default playlistService;
