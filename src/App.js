import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Playlist from './pages/Playlist'


export default class App extends React.Component {
   render() {
      return (
         <React.Fragment>
            <Playlist/>
         </React.Fragment>
      )
   };
}
