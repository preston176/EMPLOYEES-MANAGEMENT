import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getEmployee')

      .then(res => {
        if (res.data.Status === "Success") {
          // console.log(res.data.Result)
          setInfo(res.data.Result)
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='px-5 py-3'>
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/create">
        <button className='btn btn-success'>Add Employee</button>
      </Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {info.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{
                  <img src={`http://localhost:8081/images/${emp.image}`} className='w-25 employee_image' />

                }</td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link to={`/employeeEdit/${emp.id}`} className='btn btn-primary btn-sm me-2'>edit</Link>
                  <button className='btn btn-sm btn-danger'>delete</button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee
