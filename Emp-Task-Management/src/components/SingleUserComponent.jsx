import React from 'react';

function SingleUserComponent({ user, onDelete }) {

  return (
    <tr>

      <td>{user.id}</td>

      <td className="fw-semibold">
        {user.name}
      </td>

      <td>{user.email}</td>

      <td>{user.phone}</td>

      <td>{user.address}</td>

      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(user.id)}
        >
          <i className="ri-delete-bin-line me-1"></i>
          Delete
        </button>
      </td>

    </tr>
  );
}

export default SingleUserComponent;