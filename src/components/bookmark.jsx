import React from "react";
import * as Proptypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
  const renderBookmark = (status) => {
    return status ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  };

  return (
    <>
      <i
        className={renderBookmark(status)}
        onClick={() => rest.onToggleBookmark(rest.id)}
      ></i>
    </>
  );
};
Bookmark.propTypes = {
  status: Proptypes.string.isRequired
};

export default Bookmark;
