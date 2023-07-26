import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [adminCount, setAdminCount] = useState('')
  const [employeeCount, setEmployeeCount] = useState('')
  const [sumOfSalary, setSumOfSalary] = useState();
  const [admins, SetAdmins] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/adminCount')
    .then(res => {
       setAdminCount(res.data[0].admin)
    }).catch(err => console.log(err))

    axios.get('http://localhost:8081/employeeCount')
    .then(res => {
      setEmployeeCount(res.data[0].employee)
    }).catch(err => console.log(err))

    axios.get('http://localhost:8081/sumOfSalary')
    .then(res => {
      setSumOfSalary(res.data[0].sumOfSalary)
    }).catch(err => console.log(err))
}, [])
return (
  <div>
    <div className="p-3 d-flex justify-content-around mt-3">
      <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">
          <h4>Admin</h4>
          <hr />
          <div className="">
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">
          <h4>Employee</h4>
        </div>
        <hr />
        <div className="">
          <h5>Total: {employeeCount}</h5>
        </div>
      </div>

      <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">
          <h4>Salary</h4>
        </div>
        <hr />
        <div className="">
          <h5>Total: {sumOfSalary}</h5>
        </div>
      </div>
    </div>
    {/* admin list */}
    <div className="mt-4 px-5 pt-3">
      <h3>List of Admins</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          {/* Sample data for demonstration */}
          <tr>
            <td>admin1@example.com</td>
            <td>Action buttons (edit, delete, etc.)</td>
          </tr>
          <tr>
            <td>admin2@example.com</td>
            <td>Action buttons (edit, delete, etc.)</td>
          </tr>
          {/* Add more rows here with real admin data */}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Home;
