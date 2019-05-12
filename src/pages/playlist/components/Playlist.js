import React from 'react';
import {Col, Row} from "react-bootstrap";
import Track from "./track/Track";


function Playlist(props) {
   return (
      <Row>
         {
            props.tracks.map(track => {
               return (
                  <Col sm={6} md={3} key={track.track_id}>
                     <Track
                        track={track}
                        onDelete={() => props.onDelete(track.track_id)}
                        onClick={() => props.onClick(track.track_id)}/>
                  </Col>
               );
            })
         }
      </Row>
   )
}

export default Playlist;
