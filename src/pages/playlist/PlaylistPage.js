import React from 'react';
import AddTrackModal from "./components/addTrackModal/AddTrackModal";
import playlistService from "../../services/playlistService";
import {Button, Container} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import userPreferences from "../../services/userPreferences";
import PlaylistIsFullModal from "./components/PlaylistIsFullModal";

import './playlist-page.less';
import PlaylistSortByDropdown, {SORT_CHOICES as PLAYLIST_SORT_CHOICES} from "./components/PlaylistSortByDropdown";
import Bar from "../../base-components/bar/Bar";
import Playlist from "./components/Playlist";
import Page from "../../base-components/Page";


const MAX_TRACKS = 19;

class PlaylistPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAddTrackOverlayShown: false,
         tracks: playlistService.load(),
         sortOrder: userPreferences.load().sortOrder || PLAYLIST_SORT_CHOICES.ORIGINAL,
         isPlaylistFullModalShown: false
      };

      this.showAddTrackOverlay = this.showAddTrackOverlay.bind(this);
      this.hideAddTrackOverlay = this.hideAddTrackOverlay.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
      this.handleSort = this.handleSort.bind(this);
      this.deleteTrack = this.deleteTrack.bind(this);
      this.showFullPlaylistModal = this.showFullPlaylistModal.bind(this);
      this.hideFullPlaylistModal = this.hideFullPlaylistModal.bind(this);
      this.goToTrackPage = this.goToTrackPage.bind(this);
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
         playlistService.save(tracks);

         return {
            tracks: tracks
         };
      });
   }

   deleteTrack(trackId) {
      this.setState((prevState) => {
         const updatedTracks = prevState.tracks.filter((track) => track.track_id !== trackId);
         playlistService.save(updatedTracks);

         return {
            tracks: updatedTracks
         }
      });
   }

   handleSort(sortBy) {
      this.setState((prevState) => {
         const sortedPlaylist = playlistService.sortBy(prevState.tracks, sortBy.value);
         playlistService.save(sortedPlaylist);
         userPreferences.save({sortOrder: sortBy});

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

   goToTrackPage(trackId) {
      this.props.history.push(`/track/${trackId}`);
   }

   render() {
      return (
         <Page className="playlist-page">
            <Bar
               left={
                  <Button variant="success" onClick={this.showAddTrackOverlay}>Add Track</Button>
               }

               right={
                  <div>
                     <span className="playlist-page__sort-by-label">Sort by</span>
                     <PlaylistSortByDropdown onSelect={this.handleSort} initialChoice={this.state.sortOrder}/>
                  </div>
               }
            />

            <Playlist
               tracks={this.state.tracks}
               onDelete={this.deleteTrack}
               onClick={this.goToTrackPage}
            />

            <AddTrackModal
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

            {
               this.state.tracks.length === 0 &&
               <div>Your playlist is empty</div>
            }
         </Page>
      );
   }
}

export default withRouter(PlaylistPage);
