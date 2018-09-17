import * as React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { Comparison } from './containers/Comparison';
import { Header } from '@components/Header';
import { SideMenu } from '@components/SideMenu';
import './App.scss';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app-container">
            <Header/>
            <SideMenu/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/comparison" component={Comparison} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
