import React from 'react';

import Playlist from './pages/Playlist'


export default class App extends React.Component {
   render() {
      return (
         <React.Fragment>
            <span>Hello World</span>
            <Playlist/>
         </React.Fragment>
      )
   };
}
