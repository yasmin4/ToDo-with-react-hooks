import React, { useState, useEffect } from 'react';
import './style.css';

export default function Formdata(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChangeHandler}
      />
    </div>
  );
}
