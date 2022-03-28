import React, {useState} from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const usersCount = users.length;

  const renderPhrase = (number) => {
    return (number === 2) ? `${number} человека тусанет с тобой сегодня` :
        (number === 3) ? `${number} человека тусанет с тобой сегодня` :
        (number === 4) ? `${number} человека тусанет с тобой сегодня` :
        (number === 0) ? `Никто с тобой не тусанет :(` :
        `${number} человек тусанет с тобой сегодня`;
  };

  const getPhraseClasses = () => {
    let classes = "badge "
    classes += usersCount === 0 ? "bg-danger" : "bg-primary"
    return classes;
  }

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user !== userId));
  }

  const renderUsers = () => {
    return users.map((user) => (
      <tr key = {user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => (
            <span className = {'badge m-1 bg-' + item.color} key = {item._id}>
            {item.name}
          </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button
            className = 'btn btn-danger'
            onClick = {() => handleDelete(user)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <>
      <span className = {getPhraseClasses()}>
        {renderPhrase(usersCount)}
      </span>
      {users.length > 0 && (
        <table className = 'table'>
          <thead>
            <tr key = 'header'>
              <th key = 'Name' scope = 'col'>
                Имя
              </th>
              <th key = 'Qualities' scope = 'col'>
                Качества
              </th>
              <th key = 'Profession' scope = 'col'>
                Профессия
              </th>
              <th key = 'CompletedMeetings' scope = 'col'>
                Встретился, раз
              </th>
              <th key = 'Rate' scope = 'col'>
                Оценка
              </th>
              <th key = 'Button' scope = 'col'>
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