import React, { useState } from 'react';
import { users } from '../data/user';
import SingleUserComponent from './SingleUserComponent';

function AllUsersComponent() {

  const [allUsers, setAllUsers] = useState([]);


  const addAllUsers = () => {
    setAllUsers(users);
  };

  
  const deleteAllUsers = () => {
    setAllUsers([]);
  };

  
  const deleteUser = (id) => {
    const updatedUsers = allUsers.filter(
      (user) => user.id !== id
    );

    setAllUsers(updatedUsers);
  };

  return (
    <div className="container py-5">

      <div className="card shadow border-0">

        <div className="card-header bg-dark text-white text-center py-3">
          <h2 className="mb-0">User Management System</h2>
        </div>

        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

            <h4 className="mb-0">
              All Users
            </h4>

            {allUsers.length === 0 ? (

              <button
                className="btn btn-success"
                onClick={addAllUsers}
              >
                <i className="ri-user-add-line me-2"></i>
                Add All Users
              </button>

            ) : (

              <button
                className="btn btn-danger"
                onClick={deleteAllUsers}
              >
                <i className="ri-delete-bin-line me-2"></i>
                Delete All Users
              </button>

            )}

          </div>

          {allUsers.length > 0 && (

            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle text-center">

                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {allUsers.map((user) => (

                    <SingleUserComponent
                      key={user.id}
                      user={user}
                      onDelete={deleteUser}
                    />

                  ))}

                </tbody>

              </table>

            </div>

          )}

          {allUsers.length === 0 && (

            <div className="text-center py-5">

              <i className="ri-user-search-line text-secondary"
                style={{ fontSize: "55px" }}>
              </i>

              <h5 className="mt-3 text-secondary">
                No Users Available
              </h5>

              <p className="text-muted mb-0">
                Click Add All Users to display user information.
              </p>

            </div>

          )}

        </div>

        <div className="card-footer bg-light text-center">

          <p className="mb-0 text-muted">
            Total Users: <strong>{allUsers.length}</strong>
          </p>

        </div>

      </div>

    </div>
  );
}

export default AllUsersComponent;