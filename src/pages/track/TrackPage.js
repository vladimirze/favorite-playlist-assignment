import React from 'react';
import {withRouter} from "react-router-dom";

import playlistService from "../../services/playlistService";
import Button from "react-bootstrap/Button";
import Lyrics from "./components/Lyrics";
import Page from "../../base-components/Page";


class TrackPage extends React.PureComponent {
   constructor(props) {
      super(props);

      this.trackId = parseInt(this.props.match.params.id);
      this.track = playlistService.findTrack(this.trackId);

      this.gotoPlaylist = this.gotoPlaylist.bind(this);
   }

   renderLyrics() {
      if (this.track && this.track.has_lyrics === 1) {
         return <Lyrics trackId={this.trackId}/>;
      } else {
         return <div>No lyrics for this track</div>;
      }
   }

   gotoPlaylist() {
      this.props.history.push('/');
   }

   // todo: think about better way handling 404 with <Page> (currently code still have to be surrounded by condition)
   render() {
      return (
            <Page render404={!this.track}>
               {
                  this.track &&
                  <div>
                     <div>Name: {this.track.track_name}</div>
                     <div>Artist: {this.track.artist_name}</div>
                     <div>Album: {this.track.album_name}</div>
                     <div>Length: {this.track.track_length || 'N/A'}</div>
                  </div>
               }

               {this.renderLyrics()}

               <Button variant="info" onClick={this.gotoPlaylist}>Back to Playlist</Button>
            </Page>
      )
   }
}

export default withRouter(TrackPage);
