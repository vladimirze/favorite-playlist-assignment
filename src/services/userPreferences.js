import storageFactory from "./storageFactory";

const userPreferences = {
   key: 'favorite-playlist-preferences',

   ...storageFactory({})
};

export default userPreferences;
