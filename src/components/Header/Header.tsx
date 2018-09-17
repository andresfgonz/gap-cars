import * as React from 'react';
import { FaBars, FaCar, FaTimes } from 'react-icons/fa';
import { connect, MapStateToProps } from 'react-redux';

import { toggleMenu } from '@store/side-menu/side-menu.actions';
import { AppState } from '@store/types';

import './Header.scss';

interface PropsFromState {
  isSideMenuVisible?: boolean;
}

interface PropsFromDispatch {
  toggleMenu?: typeof toggleMenu;
}

type ComponentProps = PropsFromState & PropsFromDispatch;

class Header extends React.Component<ComponentProps, {}> {
  public render() {
    const { toggleMenu, isSideMenuVisible } = this.props;

    return (
      <header className="app-header">
        <div className="leftSection" onClick={() => toggleMenu()}>
          {
            isSideMenuVisible ?
              <FaTimes className="menu-icon" /> :
              <FaBars className="menu-icon" />
          }
        </div>
        <div className="title-container">
          <FaCar className="app-logo" />
          <h1 className="app-title">GAP CARS</h1>
        </div>
      </header>
    );
  }
}

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ isSideMenuVisible }) => ({ isSideMenuVisible });

export default connect(mapStateToProps, { toggleMenu })(Header);
