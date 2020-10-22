import React from 'react';
import { connect } from 'react-redux';
import styles from './style.module.sass';
import { Link } from 'react-router-dom';

const Header = ({ isAdmin }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <Link to='/'>Web service</Link>
      </div>
      {isAdmin && <Link to='/dashboard' className={styles.menuLink}>Dashboard</Link>}
    </div>
  );
};

const mapStateToProps = state => ({
  isAdmin: state.user.user.isAdmin
});

export default connect(mapStateToProps)(Header);
