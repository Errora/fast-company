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
    // const newUsers = users.map((user) => (user._id == id) ? status = false : status = true);
    // setUsers(newUsers);
  }

  return (
    <div>
      <SearchStatus length={users.length}/>
      <Users users={users} onDelete={handleDelete} onToggleBookmark={handleToggleBookmark}/>
    </div>
  )
}

export default App;
