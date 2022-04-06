import React from "react";

const Bookmark = ({status, ...rest}) => {

  const renderBookmark = (status) => {
    return (status) ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  }

  return <>
    <i className = {renderBookmark(status)}
    ></i>
  </>
}

export default Bookmark;
