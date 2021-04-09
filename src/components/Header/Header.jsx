import React from "react";
import config from "../../config";

import './Header.scss'

const Header = () => (
  <div className="header">
    <a href="" className="logo">Pokemon App</a>
    <div className="header-right">
      <a href={config.app.pages.list}>Home</a>
      <a href={config.app.pages.my_pokemon}>My Pokemon</a>
    </div>
  </div>
)

export default Header
