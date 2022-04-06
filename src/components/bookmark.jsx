import React from "react";

const Bookmark = ({status, ...rest}) => {

  const renderBookmark = (status) => {
    return (status) ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  }

  const changeBookmark = (status) => {
    return (status) ? false : true;
  }

  return <>
    <i className = {renderBookmark(status)}
      onClick={changeBookmark}
    ></i>
  </>
}

export default Bookmark;
