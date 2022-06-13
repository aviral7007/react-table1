import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import {AiFillCreditCard} from 'react-icons/ai'

export const Table = ({ data }) => {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>

          <th><input type='checkbox'></input></th>
          <th>Id</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ id, name, email, role }) => (
            
              <tr key={name}>
                <td><input type='checkbox' name='name' value={id}/> </td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td> <AiFillDelete/> &nbsp; <AiFillCreditCard/> </td>
                
              </tr>
        
          ))}
      </tbody>
    </table>
  );
};
