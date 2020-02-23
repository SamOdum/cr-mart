import React from 'react';
import Topbar from './TopBar';
import MiddleInner from './MiddleInner';
import HeaderInner from './HeaderInner';

const Header = () => (
  <header className="header shop">
    <Topbar />
    <MiddleInner />
    <HeaderInner />
  </header>
);

export default Header;
