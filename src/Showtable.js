import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactBootstrap from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function Showtable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Task description</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {props.listDescription.map((doList, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{doList}</td>
            <td>
              <button onClick={() => props.editRow(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => props.deleteRow(index)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
