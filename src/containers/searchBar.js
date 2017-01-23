import React, { Component } from 'react';
import * as Blueprint from "@blueprintjs/core";

export default class searchBar extends Component {
  render() {
    return(
      <div className="pt-input-group .modifier">
        <span className="pt-icon pt-icon-search"></span>
        <input className="pt-input" type="search" placeholder="Search input" dir="auto" />
      </div>
    )
  }
}
