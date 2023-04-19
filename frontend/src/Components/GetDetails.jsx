import React from 'react'
import { useState } from 'react';

export default function GetDetails() {
    const [data, setData] = useState([]);
    const getAllUser = () => {
        fetch("http://localhost:5000/B_GetAllContactUs", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data.data);

          });
      };

   
  return (
    <div>
        <button className='submit' type="submit" onClick={getAllUser}>GetUserDetails</button> 
        {(data.length !== 0) && <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Msg</th>
        </tr>
        </thead>
        <tbody>

      {data.map((res) => {
           return <tr>
               
               <td>{res.name}</td>
               <td>{res.email}</td>
               <td>{res.phone}</td>
               <td>{res.message}</td>
           </tr>
       })
   }
</tbody>
      </table>
      
      
}

    </div>
  )
}
