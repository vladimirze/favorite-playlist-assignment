import React from 'react';
import {Button, Card} from "react-bootstrap";

import './track.less';


export default function Track(props) {
   function handleDelete(event) {
      event.stopPropagation();
      props.onDelete(props.track);
   }

   return (
      <Card className="track" onClick={props.onClick}>
         <Card.Img variant="top" src="https://via.placeholder.com/150"/>

         <Card.Body>
            <Card.Title className="text-truncate">{props.track.track_name}</Card.Title>

            <Card.Text className="text-truncate">
               {props.track.artist_name}
               <br/>
               {props.track.album_name}
            </Card.Text>

            <Button variant="danger" onClick={handleDelete}>Delete</Button>
         </Card.Body>
      </Card>
   )
}
