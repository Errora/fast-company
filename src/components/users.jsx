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
    return users.length !== 0 &&
      users.map((user) => (
        <tr key = {user}>
          <td>{user.name}</td>
          <td>{user.qualities}</td>
          <td>{user.profession}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td
            className = "btn btn-danger"
            onClick = {() => handleDelete(user)}
          >
            Delete
          </td>
        </tr>
      ))
  }
  if (users.length !== 0) {
    return <ul>{renderUsers()}</ul>
  }

  return (
    <>
      <table className = "table">
        <thead>
          <tr key = 'header'>
            <th key = 'Имя' scope = "col">Имя</th>
            <th key = 'Качества' scope = "col">Качества</th>
            <th key = 'Профессия' scope = "col">Профессия</th>
            <th key = 'Встретился' scope = "col">Встретился, раз</th>
            <th key = 'Оценка' scope = "col">Оценка</th>
            <th key = 'Кнопка' scope = "col"></th>
          </tr>
        </thead>
        <tbody>
          <tr key = 'tr'>
            <td>{user.name}</td>
            <td>{user.qualities}</td>
            <td>{user.profession}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td
              className = "btn btn-danger"
              onClick = {() => handleDelete(user)}
            >
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Users;