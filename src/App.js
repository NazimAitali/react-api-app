import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setData(response.data);
  };
  {
    useEffect(() => {
      fetchData();
    }, []);
  }

  return (
    <div className="App">
      <div className="navbar">List Of Users</div>
      <div className="container">
      {data.map((user, index) => {
        return (
          <User
            key={index}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            suite={user.address.suite}
            street={user.address.street}
            city={user.address.city}
            zipcode={user.address.zipcode}
            phone={user.phone}
            website={user.website}
            companyName={user.company.name}
            catchPhrase={user.company.catchPhrase}
            bs={user.company.bs}
          />
        );
      })}
     </div>
 
    </div>
  );
}

export default App;
