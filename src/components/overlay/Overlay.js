import React from 'react';

import './overlay.less';


export default function Overlay(props) {
   return (
      <div className="fp-overlay">
         <div className="fp-overlay__header">
            {props.header}
            <span className="fp-overlay__close" onClick={props.onClose}>x</span>
         </div>
         <div className="fp-overlay__content">{props.content}</div>
         <div className="fp-overlay__footer">{props.footer}</div>
      </div>
   )
}
