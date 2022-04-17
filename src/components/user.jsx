import React from "react";
import Bookmark from "./bookmark";
import Quality from "./quality";
import * as Proptypes from "prop-types";

const User = ({
  name,
  _id,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookmark
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Quality {...qual} key={qual._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark
          status={bookmark}
          onToggleBookmark={onToggleBookmark}
          id={_id}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
User.propTypes = {
  name: Proptypes.string.isRequired,
  _id: Proptypes.string.isRequired,
  qualities: Proptypes.object.isRequired,
  profession: Proptypes.string.isRequired,
  completedMeetings: Proptypes.number.isRequired,
  rate: Proptypes.number.isRequired,
  onDelete: Proptypes.func.isRequired,
  bookmark: Proptypes.string.isRequired,
  onToggleBookmark: Proptypes.func.isRequired
};

export default User;
