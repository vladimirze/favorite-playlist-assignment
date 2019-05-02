import React from 'react';

import trackResource from '../../api/track';
import Overlay from "../overlay/Overlay";
import './add-track-overlay.less';


export default class AddTrackOverlay extends React.Component {
   constructor(props) {
      super(props);


      this.state = {
         artistName: '',
         trackName: '',
         tracks: []
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
      trackResource.getTrackByName(this.state.trackName)
         .then((response) => {
            this.setState({tracks: response.map((track) => track.track)});
         });
   }

   chooseTrack(track) {
      this.props.onClose(track);
   }

   render() {
      return (
         <Overlay
            header="Add New Track"
            content={
               <div className="add-track-overlay">
                  <div>
                     <label htmlFor="artistName"/>
                     <input name="artistName" id="artistName" placeholder="Artist name" onChange={this.updateInput}/>
                  </div>

                  <div>
                     <label htmlFor="trackName"/>
                     <input name="trackName" id="trackName" placeholder="Track name" onChange={this.updateInput}/>
                  </div>

                  <div className="add-track-overlay__tracks">
                     {
                        this.state.tracks.map((track) => {
                           return (
                              <div key={track.track_id} className="add-track-overlay__track" onClick={() => { this.chooseTrack(track); }}>
                                 {track.artist_name} - {track.track_name}
                              </div>
                              )
                        })
                     }
                  </div>
               </div>
            }

            footer={
               <button onClick={this.findTracks}>Find</button>
            }
            onClose={this.props.onClose}
            />
      )
   }
}
