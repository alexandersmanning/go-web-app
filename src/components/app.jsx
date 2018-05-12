import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './sidebar';

import styles from '../styles/app.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.routeList = [
      { path: '/', exact: true, title: 'Home', component: () => (<div>Home</div>) },
      { path: '/hello', exact: false, title: 'Hello', component: () => (<div>Hello</div>) },
      { path: '/goodbye', exact: false, title: 'Goodbye', component: () => (<div>Home</div>) },
    ];

    this.state = { open: true };
  }

  updateSidebarState() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Router>
        <div>
          <Sidebar open={this.state.open} routeList={this.routeList} />
          <div className={`${styles.app} ${this.state.open && styles.app__compressed}`}>
            <div className={styles.app__navigation}>
              <div
                className={styles['app__sidebar-toggle']}
                role="button"
                tabIndex={0}
                onClick={() => this.updateSidebarState()}
              >
                Menu
              </div>
            </div>
            <div className={styles.app__body}>
              <Switch>
                {
                  this.routeList.map(({ title, path, exact, component }) => (
                    <Route key={`route-${title}`} exact={exact} path={path} component={component} />
                  ))
                }
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


