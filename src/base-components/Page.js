import React from 'react';

import PageNotFound from "./PageNotFound";
import {Container} from "react-bootstrap";


export default function Page(props) {
   return (
      <Container className={props.className}>
         {
            props.render404 &&
            <PageNotFound/>
         }

         {
            !props.render404 &&
            props.children
         }
      </Container>
   );
}
