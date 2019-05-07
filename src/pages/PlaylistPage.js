import React from 'react';
import AddTrackOverlay from "../components/addTrackOverlay/AddTrackOverlay";
import playlistStorage from "../services/playlistStorage";
import Track from "../components/Track";
import {Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import Dropdown from "../components/Dropdown";
import userPerferences from "../services/userPreferences";


const SORT_CHOICES = {
   ORIGINAL: {label: 'Default', value: 'added_at'},
   TRACK: {label: 'Track', value: 'track_name'},
   ALBUM: {label: 'Album', value: 'album_name'},
   ARTIST: {label: 'Artist', value: 'artist_name'}
};

class PlaylistPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false,
         tracks: playlistStorage.load(),
         sortOrder: userPerferences.load().sortOrder || SORT_CHOICES.ORIGINAL
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.renderTracks = this.renderTracks.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
      this.handleSort = this.handleSort.bind(this);
   }

   showAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: true}));
   }

   hideAddTrackOverlay() {
      this.setState(() => ({isAddTrackOverlayShown: false}));
   }

   addTrack(track) {
      this.setState((prevState) => {
         track.added_at = Date.now();
         const tracks = [track, ...prevState.tracks];
         playlistStorage.save(tracks);

         return {
            tracks: tracks
         };
      });
   }

   renderTracks() {
    return (
       <Row>
          {
            this.state.tracks.map(track => {
               return (
                  <Col xs={3} key={track.track_id}>
                     <Track
                        track={track}
                        onDelete={this.deleteTrack}
                        onClick={() => this.props.history.push(`/track/${track.track_id}`)}/>
                  </Col>
               );
            })
          }
       </Row>
   )
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

   handleSort(sortBy) {
      this.setState((prevState) => {
         const sortedPlaylist = playlistStorage.sortBy(prevState.tracks, sortBy.value);
         playlistStorage.save(sortedPlaylist);
         userPerferences.save({sortOrder: sortBy});

         return {
            tracks: sortedPlaylist,
            sortOrder: sortBy
         }
      });
   }

   render() {
      return (
         <Container>
            <button onClick={this.showAddTrackOverlay}>Add track</button>

            Sort by:
            <Dropdown
               choices={SORT_CHOICES}
               onSelect={this.handleSort}
               initialChoice={this.state.sortOrder}/>

            <AddTrackOverlay
               onClose={this.hideAddTrackOverlay}
               onAddTrack={this.addTrack}
               isShown={this.state.isAddTrackOverlayShown}
               key={this.state.isAddTrackOverlayShown}/>

          {this.renderTracks()}
         </Container>
      );
   }
}

export default withRouter(PlaylistPage);
