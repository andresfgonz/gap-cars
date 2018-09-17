import * as React from 'react';
import { FaClipboardList, FaList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { connect, MapStateToProps } from 'react-redux';

import { toggleMenu } from '@store/side-menu/side-menu.actions';
import { AppState } from '@store/types';

import './SideMenu.scss';

interface PropsFromState {
  isSideMenuVisible?: boolean;
}

interface PropsFromDispatch {
  toggleMenu?: typeof toggleMenu;
}

type ComponentProps = PropsFromState & PropsFromDispatch;

class SideMenu extends React.Component<ComponentProps, {}> {
  public render() {
    const { isSideMenuVisible, toggleMenu } = this.props;

    return (
      <aside className={`app-menu${isSideMenuVisible ? ' visible-menu' : ''}`}>
        <NavLink
          to="/"
          className="nav-link"
          exact
          activeClassName="active-link"
          onClick={() => toggleMenu()}
        >
          <FaList className="nav-link-icon" />
          Cars List
        </NavLink>

        <NavLink
          to="/comparison"
          className="nav-link"
          activeClassName="active-link"
          onClick={() => toggleMenu()}
        >
          <FaClipboardList className="nav-link-icon" />
          Compare Cars
        </NavLink>
      </aside>
    );
  }
}

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ isSideMenuVisible }) => ({ isSideMenuVisible });

export default connect(mapStateToProps, { toggleMenu })(SideMenu);
