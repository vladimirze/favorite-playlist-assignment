import React from 'react';

import trackResource from '../../api/track';
import './add-track-overlay.less';
import {Button, ListGroup, Modal, Form} from "react-bootstrap";


export default class AddTrackOverlay extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         artistName: '',
         trackName: '',
         tracks: [],
         isNoTracksFound: false
      };

      this.findTracks = this.findTracks.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.chooseTrack = this.chooseTrack.bind(this);
   }

   updateInput(event) {
      const {name, value} = event.target;
      this.setState(() => ({[name]: value}));
   }

   findTracks() {
      trackResource.findTrack({q_track: this.state.trackName, q_artist: this.state.artistName})
         .then(tracks => {
            this.setState(() => {
               const found = tracks.map(track => track.track);
               return {
                  tracks: found,
                  isNoTracksFound: found.length === 0
               }
            });
         })
         .catch(console.error);
   }

   chooseTrack(track) {
      this.props.onAddTrack(track);
      this.props.onClose();
   }

   render() {
      return (
         <React.Fragment>
            <Modal show={this.props.isShown} onHide={this.props.onClose} className="add-track-overlay">
               <Modal.Header closeButton>
                  <Modal.Title>Add Track</Modal.Title>
               </Modal.Header>

               <Modal.Body className="add-track-overlay">
                  <Form>
                     <Form.Group controlId="artistName">
                        <Form.Label>Artist name</Form.Label>
                        <Form.Control name="artistName" placeholder="Artist name" onChange={this.updateInput} />
                     </Form.Group>

                     <Form.Group controlId="trackName">
                        <Form.Label>Track name</Form.Label>
                        <Form.Control name="trackName" placeholder="Track name" onChange={this.updateInput} />
                     </Form.Group>

                     <Button variant="primary" onClick={this.findTracks} block>Find</Button>
                  </Form>

                  <hr/>

                  <div className="add-track-overlay__list-container">
                     <ListGroup>
                        {
                           this.state.tracks.map((track) => {
                              return (
                                 <ListGroup.Item action key={track.track_id} onClick={() => { this.chooseTrack(track); }}>
                                    {track.artist_name} - {track.track_name}
                                 </ListGroup.Item>
                                 )
                           })
                        }
                     </ListGroup>
                  </div>

                  {
                     this.state.isNoTracksFound &&
                     <div className="text-center">No tracks found</div>
                  }
               </Modal.Body>
            </Modal>
         </React.Fragment>
      )
   }
}
