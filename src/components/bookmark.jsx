import React from "react";

const Bookmark = ({status, ...rest}) => {
  console.log('rest from bookmark', rest);
  const renderBookmark = (status) => {
    return (status) ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  }

  return <>
    <i className = {renderBookmark(status)}
    ></i>
  </>
}

export default Bookmark;
