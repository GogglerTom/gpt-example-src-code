import React from 'react';

function Button (props) {
  const {clickHandler, text} = props;

  return <button onClick={clickHandler}>{text}</button>
}

export default Button;
