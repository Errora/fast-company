import React from "react";
import Bookmark from "./bookmark";

const User = ({name, _id, qualities, profession, completedMeetings, rate, onDelete, bookmark, onToggleBookmark}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((i)=>
          <span className={'badge m-1 bg-' + i.color} key={i._id}>{i.name}
          </span>)}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td><Bookmark
        status={bookmark}
        onToggleBookmark={onToggleBookmark}
        id={_id}/></td>
      <td>
        <button className="btn btn-danger" onClick={()=>{onDelete(_id)}}>Delete</button>
      </td>
    </tr>
  )
}

export default User;