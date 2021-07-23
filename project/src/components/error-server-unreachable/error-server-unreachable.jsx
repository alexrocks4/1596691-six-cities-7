import React from 'react';
import { ErrorMessage } from '../../const';

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
    <p style={style}>{ErrorMessage.SERVER_UNREACHABLE}</p>
  );
}

export default ErrorServerUnreachable;
