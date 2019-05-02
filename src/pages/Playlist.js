import React from 'react';
import AddTrackOverlay from "../components/add-track-overlay/AddTrackOverlay";


export default class Playlist extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
   }

   showAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: true}));
   }

   hideAddTrackOverlay(track) {
      this.setState(() => ({isAddTrackOverlayShown: false}));
   }

   render() {
      return (
         <div>
            <button onClick={this.showAddTrackOverlay}>Add track</button>

            {this.state.isAddTrackOverlayShown &&
            <AddTrackOverlay onClose={this.hideAddTrackOverlay}/>}
         </div>
      );
   }
}
