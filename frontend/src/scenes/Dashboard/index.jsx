import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUsersRoutine } from 'scenes/Dashboard/routines';
import styles from './styles.module.sass';

const Dashboard = ({ users, isLoading, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className={styles.Dashboard}>
      <Table className={styles.table} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th className={styles.clicks}>
              <div>Clicks</div>
              <div className={styles.clicksCellWrp}>
                <div className={styles.clicksCell}>Button 1</div>
                <div className={styles.clicksCell}>Button 2</div>
                <div className={styles.clicksCell}>Button 3</div>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ _id, fullName, email, counters}, ind) => (
            <tr key={_id}>
              <td>{ind + 1}</td>
              <td>{fullName}</td>
              <td>{email}</td>
              <td >
                <div className={styles.clicksCellWrp}>
                  {counters.map((counter, i) => <div key={i} className={styles.counter}>{counter}</div>)}
                </div>
              </td>
              <td>
                <Button variant="danger" size="sm">Remove user</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.dashboard.users,
  isLoading: state.dashboard.isLoading
});

const mapDispatchToProps = {
  getUsers: getUsersRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
