import React from 'react';
import trackResource from "../../../api/track";

export default class Lyrics extends React.PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         lyrics: ''
      }
   }

   componentDidMount() {
      trackResource.getLyrics(this.props.trackId)
         .then(response => {
            this.setState(() => ({lyrics: response.lyrics.lyrics_body}));
         })
         .catch(console.error);
   }

   render() {
      return (
         <pre>{this.state.lyrics}</pre>
      )
   }
}
