import React from "react";

const Bookmark = ({status, ...rest}) => {

  const renderBookmark = (status) => {
    return (status === 'off') ? "bi bi-bookmark" : "bi bi-bookmark-fill";
  }

  const toggleBookmark = () => {
    console.log('toggleBookmark!');
    const bookmarkHtml = document.querySelector('i');
    const classList = bookmarkHtml.classList;
    if (classList[1] === 'bi-bookmark') {
      bookmarkHtml.classList.remove('bi-bookmark');
      bookmarkHtml.classList.add('bi-bookmark-fill');
    } else {
      bookmarkHtml.classList.remove('bi-bookmark-fill');
      bookmarkHtml.classList.add('bi-bookmark');
    }
  }

  return <>
    <i className = {renderBookmark(status)} onClick = {toggleBookmark}></i>
  </>
}

export default Bookmark;