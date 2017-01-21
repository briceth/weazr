import React, { Component } from 'react';
import {
    Button,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);


export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <Popover content={menu} position={Position.BOTTOM_RIGHT}>
          <Button text="Actions" />
        </Popover>
      </div>
    );
  }
}
