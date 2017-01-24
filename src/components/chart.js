import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length)
}


export default (props) => {
  return(
    <div>
      <Sparklines width={180} height={120} data={props.temps}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{average(props.temps)} {props.units}</div>
    </div>
  )
}