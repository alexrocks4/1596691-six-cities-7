import React from 'react';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
};

function ErrorServerUnreachable() {
  return (
    <p style={style}>Data fetching error. Server unreachable.</p>
  );
}

export default ErrorServerUnreachable;
