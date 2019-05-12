import Dropdown from "../../../base-components/Dropdown";
import React from "react";


export const SORT_CHOICES = {
   ORIGINAL: {label: 'Default', value: 'added_at'},
   TRACK: {label: 'Track', value: 'track_name'},
   ALBUM: {label: 'Album', value: 'album_name'},
   ARTIST: {label: 'Artist', value: 'artist_name'}
};

export default function PlaylistSortByDropdown(props) {
   return (
         <Dropdown
            choices={SORT_CHOICES}
            onSelect={props.onSelect}
            initialChoice={props.initialChoice}/>
   )
}
