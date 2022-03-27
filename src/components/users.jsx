import React, {useState} from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const renderPhrase = (number) => {
  };

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user !== userId));
  }

  const renderUsers = () => {
    users.map((user) => (
      <tr key = {user._id}>
        <td>{user.name}</td>
        <td>{user.qualities.map((item) => (
          <span
            className = {'badge m-1 bg-' + item.color}
            key = {item._id}
          >
            {item.name}
          </span>
        ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button
            className = "btn btn-danger"
            // onClick = {() => handleDelete(user)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <>
      {users.length > 0 && (
        <table className = "table">
          <thead>
            <tr key = 'header'>
              <th key = 'Name' scope = "col">
                Имя
              </th>
              <th key = 'Qualities' scope = "col">
                Качества
              </th>
              <th key = 'Profession' scope = "col">
                Профессия
              </th>
              <th key = 'CompletedMeetings' scope = "col">
                Встретился, раз
              </th>
              <th key = 'Rate' scope = "col">
                Оценка
              </th>
              <th key = 'Button' scope = "col">
              </th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      )}
    </>
  )
}

export default Users;