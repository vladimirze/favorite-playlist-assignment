import React from 'react';
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";
import playlistService from "../services/playlistStorage";
import Alert from "react-bootstrap/Alert";
import trackResource from "../api/track";
import Button from "react-bootstrap/Button";


class TrackPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         lyrics: {}
      };

      this.trackId = parseInt(this.props.match.params.id);
      this.track = playlistService.findTrack(this.trackId);

      this.gotoPlaylist = this.gotoPlaylist.bind(this);
   }

   componentDidMount() {
      if (this.hasLyrics()) {
         trackResource.getLyrics(this.trackId)
            .then(response => {
               this.setState(() => ({lyrics: response.lyrics}));
            })
            .catch(console.error);
      }
   }

   hasLyrics() {
      return this.track && this.track.has_lyrics === 1;
   }

   renderLyrics() {
      if (!this.hasLyrics()) {
         return <div>No lyrics for this track</div>;
      } else {
         return (
            <div>
               <hr/>
               <pre>{this.state.lyrics.lyrics_body}</pre>
            </div>
         )
      }
   }

   gotoPlaylist() {
      this.props.history.push('/');
   }

   render() {
      return (
         <Container>
            {
               !this.track &&
               <Alert variant="warning">
                  No such track
               </Alert>
            }

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
         </Container>
      )
   }
}

export default withRouter(TrackPage);
