import React, { use, useState } from 'react';
import './App.css';

const users = [
  { id: 1, name: "Rahul", status: "active" },
  { id: 2, name: "Anita", status: "inactive" },
  { id: 3, name: "Vikram", status: "active" },
  { id: 4, name: "Sneha", status: "inactive" },
  { id: 5, name: "Aman", status: "active" },
];

function App() {
  const [userList, setUserList] = useState(users)
  const [filter, setFilter] = useState("all")
  const handleSearch = (e) => {

    let searchVal = e.target.value.toLowerCase();
    let searchedList = userList.filter(user => {
      let userName = user.name.toLowerCase();
      // console.log(userName, searchVal)
      return userName.includes(searchVal)
    })
    // console.log(searchedList)

    console.log(searchedList)
    setUserList(searchedList)
  }
  const handleFilter = () => { }  // console.log(userList)
  return (
    <>
      <div >
        <input onChange={(e) => handleSearch(e)} />
        <select id="statusFilter" onchange="filterData()">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {userList.map(user => {
          return <div style={{ display: 'flex', gap: '1rem' }} >
            <span >{user.name}</span>
            <span>{user.status}</span>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
