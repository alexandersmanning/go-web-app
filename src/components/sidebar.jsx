import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from '../styles/sidebar.scss';

const Sidebar = props => (
  <div className={`${styles.sidebar} ${props.open && styles.sidebar__visible}`}>
    <div className={styles.sidebar__title}>Sidebar with links</div>
    <ul className={styles.sidebar__list}>
      {
        props.routeList.map(route => (
          <li key={`link-${route.title}`} className={styles.sidebar__item}>
            <NavLink
              to={route.path}
              exact={route.exact}
              activeClassName={styles['sidebar__link--selected']}
              className={styles.sidebar__link}
            >
              { route.title }
            </NavLink>
          </li>
        ))
      }
    </ul>
  </div>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  routeList: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    exact: PropTypes.bool,
  })),
};

Sidebar.defaultProps = {
  open: true,
  routeList: [],
};

export default Sidebar;
