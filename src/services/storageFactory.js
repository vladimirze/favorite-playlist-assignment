export default function storageFactory(defaultValue) {
   return {
      load() {
         try {
            return JSON.parse(localStorage.getItem(this.key)) || defaultValue;
         } catch (error) {
            return defaultValue;
         }
      },

      save(item) {
         localStorage.setItem(this.key, JSON.stringify(item));
      }
   }
}
