import React from 'react';

import './bar.less';


export default function Bar(props) {
   return (
      <div className="bar">
         <div>{props.left}</div>
         <div className="bar__right">{props.right}</div>
      </div>
   );
}
