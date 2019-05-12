import React from 'react';
import AddTrackOverlay from "../../components/addTrackOverlay/AddTrackOverlay";
import playlistStorage from "../../services/playlistStorage";
import Track from "../../components/track/Track";
import {Button, Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import userPerferences from "../../services/userPreferences";
import PlaylistIsFullModal from "../../components/PlaylistIsFullModal";

import './playlist-page.less';


const SORT_CHOICES = {
   ORIGINAL: {label: 'Default', value: 'added_at'},
   TRACK: {label: 'Track', value: 'track_name'},
   ALBUM: {label: 'Album', value: 'album_name'},
   ARTIST: {label: 'Artist', value: 'artist_name'}
};

const MAX_TRACKS = 19;

class PlaylistPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false,
         tracks: playlistStorage.load(),
         sortOrder: userPerferences.load().sortOrder || SORT_CHOICES.ORIGINAL,
         isPlaylistFullModalShown: false
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.renderTracks = this.renderTracks.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
      this.handleSort = this.handleSort.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
      this.showFullPlaylistModal = this.showFullPlaylistModal.bind(this);
      this.hideFullPlaylistModal = this.hideFullPlaylistModal.bind(this);
   }

   showAddTrackOverlay() {
      if (this.state.tracks.length >= MAX_TRACKS) {
         this.showFullPlaylistModal();
      } else {
         this.setState(() => ({isAddTrackOverlayShown: true}));
      }
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
                  <Col sm={6} md={3} key={track.track_id}>
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

   showFullPlaylistModal() {
      this.setState(() => ({isPlaylistFullModalShown: true}));
   }

   hideFullPlaylistModal() {
      this.setState(() => ({isPlaylistFullModalShown: false}));
   }

   render() {
      return (
         <Container className="playlist-page">
            <div className="playlist-page__top-bar">
               <Button variant="success" onClick={this.showAddTrackOverlay}>Add Track</Button>

               <div className="playlist-page__sort-by">
                  <span className="playlist-page__sort-by-label">Sort by</span>
                  <Dropdown
                     choices={SORT_CHOICES}
                     onSelect={this.handleSort}
                     initialChoice={this.state.sortOrder}/>
               </div>
            </div>

            <AddTrackOverlay
               onClose={this.hideAddTrackOverlay}
               onAddTrack={this.addTrack}
               isShown={this.state.isAddTrackOverlayShown}
               key={this.state.isAddTrackOverlayShown}/>

            <PlaylistIsFullModal
               tracks={this.state.tracks}
               onTrackSelect={this.deleteTrack}
               onClose={this.hideFullPlaylistModal}
               isShown={this.state.isPlaylistFullModalShown}
               key={`playlist-is-full-modal-${this.state.isPlaylistFullModalShown}`}/>


          {this.renderTracks()}

            {
               this.state.tracks.length === 0 &&
               <div>Your playlist is empty</div>
            }
         </Container>
      );
   }
}

export default withRouter(PlaylistPage);
