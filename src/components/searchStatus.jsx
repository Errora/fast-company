import React from "react";

const SearchStatus = ({length}) => {
  const renderPhrase = (number) => {
    return (number === 2) ? `${number} человека тусанет с тобой сегодня` :
      (number === 3) ? `${number} человека тусанет с тобой сегодня` :
        (number === 4) ? `${number} человека тусанет с тобой сегодня` :
          (number === 0) ? `Никто с тобой не тусанет :(` :
            `${number} человек тусанет с тобой сегодня`;
  };

  const getPhraseClasses = () => {
    let classes = "badge "
    classes += length === 0 ? "bg-danger" : "bg-primary"
    return classes;
  }

  return <>
    <span className={getPhraseClasses()}>{renderPhrase(length)}</span>
  </>
}

export default SearchStatus;