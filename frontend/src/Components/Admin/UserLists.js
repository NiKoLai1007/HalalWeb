import React, { useState } from 'react';
import '../../CSS/UserLists.css'; // Import the CSS file

function UserList() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Viewer' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Editor' },
    { id: 5, name: 'Chris Johnson', email: 'chris.johnson@example.com', role: 'Viewer' },
    { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'Admin' },
    { id: 7, name: 'David Lee', email: 'david.lee@example.com', role: 'Editor' },
    { id: 8, name: 'Sophia Taylor', email: 'sophia.taylor@example.com', role: 'Viewer' },
    { id: 9, name: 'James White', email: 'james.white@example.com', role: 'Admin' },
    { id: 10, name: 'Anna Walker', email: 'anna.walker@example.com', role: 'Editor' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2>User List</h2>
        <div className="user-list-actions">
          <input type="text" placeholder="Search users..." className="user-list-search" />
          <button className="user-list-create-btn">+ Create</button>
        </div>
      </div>

      <table className="user-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="user-list-pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
