import React from 'react';
import {Button, ListGroup, Modal} from "react-bootstrap";


export default function PlaylistIsFullModal(props) {
   function handleTrackSelect(track) {
      props.onTrackSelect(track);
      props.onClose();
   }

   return (
      <Modal show={props.isShown} onHide={props.onClose}>
         <Modal.Header closeButton>
            <Modal.Title>Playlist is full</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            Your playlist is full. You can select a track to be deleted to free space for your other track or you
            can choose to abort the operation.

            {
               props.tracks.map((track) => {
                  return (
                     <ListGroup.Item action key={track.track_id} onClick={() => handleTrackSelect(track)}>
                        {track.artist_name} - {track.track_name}
                     </ListGroup.Item>
                     )
               })
            }
         </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={props.onClose}>Abort</Button>
        </Modal.Footer>
   </Modal>
   )
}
