import React, { useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteUserRoutine, getUsersRoutine } from 'scenes/Dashboard/routines';
import styles from './styles.module.sass';

const Dashboard = ({ users, isLoading, deletedUserId, currentUserId, getUsers, deleteUser }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onDelete = id => {
    deleteUser(id);
  };

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
              <td>{fullName} {currentUserId === _id && '(you)'}</td>
              <td>{email}</td>
              <td >
                <div className={styles.clicksCellWrp}>
                  {counters.map((counter, i) => <div key={i} className={styles.counter}>{counter}</div>)}
                </div>
              </td>
              <td>
                <Button
                  disabled={currentUserId === _id || deletedUserId === _id}
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(_id)}
                  className={styles.deleteBtn}
                >
                  Delete user
                  {deletedUserId === _id && <Spinner animation="border" role="status" size="sm" className={styles.spinner} />}
                </Button>
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
  isLoading: state.dashboard.isLoading,
  currentUserId: state.user.user._id,
  deletedUserId: state.dashboard.deletedUserId
});

const mapDispatchToProps = {
  getUsers: getUsersRoutine,
  deleteUser: deleteUserRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
