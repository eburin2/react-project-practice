import React from 'react';
import Radium from 'radium';

const album = (props) => {
  const style = {
    width: '200px',
    height: '200px',
    cursor: 'pointer'
  }

  const flex = {
    display: 'inline-block',
    margin: '20px',
  }

  return (
      <div style={flex} onClick={props.click}>
        <h2>{props.name}</h2>
        <img alt="" style={style} src={props.image} />
        <h4>{props.title}</h4>
        <h4>{props.year}</h4>
      </div>
  )
};

export default Radium(album);
