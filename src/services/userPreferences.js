import storageFactory from "./storageFactory";

const userPerferences = {
   key: 'favorite-playlist-preferences',

   ...storageFactory({})
};

export default userPerferences;
