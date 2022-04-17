import React from "react";
import * as Proptypes from "prop-types";

const Quality = ({ color, name, _id }) => {
  return (
    <>
      {
        <span className={"badge m-1 bg-" + color} key={_id}>
          {name}
        </span>
      }
    </>
  );
};
Quality.propTypes = {
  color: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  _id: Proptypes.string.isRequired
};

export default Quality;
