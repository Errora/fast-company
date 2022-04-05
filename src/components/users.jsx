import React from "react";
import User from "./user";

const Users = ({users, ...rest}) => {
  return (
    <>
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
              <th key = 'Bookmark' scope = 'col'>
                Избранное
              </th>
              <th key = 'Button' scope = 'col'>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => <User key = {user._id} {...user} {...rest}/>)}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Users;