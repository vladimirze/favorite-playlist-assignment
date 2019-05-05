import React from 'react';
import AddTrackOverlay from "../components/addTrackOverlay/AddTrackOverlay";


export default class Playlist extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
      this.addTrack = this.addTrack.bind(this);
   }

   showAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: true}));
   }

   hideAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: false}));
   }

   addTrack(track) {
      console.log(track);
   }

   render() {
      return (
         <div>
            <button onClick={this.showAddTrackOverlay}>Add track</button>

            <AddTrackOverlay
               onClose={this.hideAddTrackOverlay}
               onAddTrack={this.addTrack}
               isShown={this.state.isAddTrackOverlayShown}
               key={this.state.isAddTrackOverlayShown}/>
         </div>
      );
   }
}
