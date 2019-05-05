import React from 'react';
import {Card} from "react-bootstrap";


export default function Track(props) {
   return (
      <Card>
         <Card.Img variant="top" src="https://via.placeholder.com/150"/>

         <Card.Body>
            <Card.Title>{props.track.track_name}</Card.Title>

            <Card.Text>
               {props.track.artist_name}
               <br/>
               {props.track.album_name}
            </Card.Text>
         </Card.Body>
      </Card>
   )
}
