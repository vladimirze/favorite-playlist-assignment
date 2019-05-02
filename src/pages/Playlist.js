import React from 'react';
import Overlay from "../components/overlay/Overlay";


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

   hideAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: false}));
   }

   render() {
      return (
         <div>
            <button onClick={this.showAddTrackOverlay}>Add track</button>

            {this.state.isAddTrackOverlayShown &&
            <Overlay header="<add_track>" content="<content>" footer="<footer>" onClose={this.hideAddTrackOverlay}/>}
         </div>
      );
   }
}
