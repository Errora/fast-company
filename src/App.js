import React, {useState} from "react";
import SearchStatus from "./components/searchStatus";
import api from "./api";
import Users from "./components/users";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId);
    setUsers(newUsers);
  }

  const handleToggleBookmark = (id) => {
    console.log('handleBookmark: ', id);
    setUsers(users.map(user => user._id === id ? {...user, bookmark: !user.bookmark} : {...user}))
  }

  return (
    <div>
      <SearchStatus length={users.length}/>
      <Users users={users} onDelete={handleDelete} onToggleBookmark={handleToggleBookmark}/>
    </div>
  )
}

export default App;
