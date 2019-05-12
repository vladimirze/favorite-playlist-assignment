import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PlaylistPage from './pages/playlist-page/PlaylistPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrackPage from "./pages/TrackPage";


export default class App extends React.Component {
   render() {
      return (
         <Router>
            <Route path="/" exact component={PlaylistPage} />
            <Route path="/track/:id" component={TrackPage} />
         </Router>
      )
   };
}
