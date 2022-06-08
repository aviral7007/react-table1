// import "./styles.css";
import { useState, useEffect } from "react";

export  function Api() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
      .then((response) => {
        //   console.log(response.)
        return response.json();
      })
      .then((myData) => {
          console.log(myData)
        setData(myData);
      })
      
  }, []);

  return (
    <div >
      <h1>data</h1>
        {data &&
          data.map(({ id,name,email,role}) => (
            <div key={id}>
                
              <table style={{border:'1px solid black'}}><tbody>
              {/* <tr>
                <th>name</th>
                <th>email</th>
                <th>role</th>
            </tr> */}
            <tr style={{border:'1px solid black'}}>
                <th>{name}</th>
                <th>{email}</th>
                <th>{role}</th>
            </tr></tbody>
              </table>
            </div>
          ))}
      
    </div>
  );
}
