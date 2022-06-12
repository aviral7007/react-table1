import React from "react";
export const Table = ({ data }) => {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>

          {/* <th><input type='checkbox'></input></th> */}
          <th>Id</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ id, name, email, role }) => (
            
              <tr key={name}>
                {/* <td><input style='checkbox'></input></td>   */}
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
              </tr>
        
          ))}
      </tbody>
    </table>
  );
};
