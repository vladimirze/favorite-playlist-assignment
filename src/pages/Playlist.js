import React from 'react';
import AddTrackOverlay from "../components/addTrackOverlay/AddTrackOverlay";
import playlistStorage from "../services/playlistStorage";
import Track from "../components/Track";


export default class Playlist extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false,
         tracks: playlistStorage.load()
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.renderTracks = this.renderTracks.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
   }

   showAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: true}));
   }

   hideAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: false}));
   }

   addTrack(track) {
      this.setState((prevState) => {
         const tracks = [track, ...prevState.tracks];
         playlistStorage.save(tracks);

         return {
            tracks: tracks
         };
      });
   }

   renderTracks() {
    return this.state.tracks.map(track => {
       return <Track track={track} key={track.track_id} onDelete={this.deleteTrack}/>;
    });
 }

   deleteTrack(trackToDelete) {
      this.setState((prevState) => {
         const updatedTracks = prevState.tracks.filter((track) => track.track_id !== trackToDelete.track_id);
         playlistStorage.save(updatedTracks);

         return {
            tracks: updatedTracks
         }
      });
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

          {this.renderTracks()}
         </div>
      );
   }
}
