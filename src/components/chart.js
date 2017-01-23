import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return(
    <div>
      <Sparklines width={100} height={30} data={props.temps}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
