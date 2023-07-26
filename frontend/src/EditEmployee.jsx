import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        salary: '',
    })
    const navigate = useNavigate();
    const {id} = useParams();
useEffect(() => {

    axios.get(`http://localhost:8081/get/${id}`)
    .then(res => {
        setData({...data, name: res.data.Result[0].name, email: res.data.Result[0].email, address: res.data.Result[0].address, salary: res.data.Result[0].salary})
    })
    .catch(err => console.log(err))
}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name)
        formdata.append("email", data.email)
        formdata.append("address", data.address)
        formdata.append("salary", data.salary)
        formdata.append("image", data.image)
        axios.post('http://localhost:8081/create', formdata)
        .then(res => {
            navigate('/employee')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex flex-column align-items-center pt-5'>
            <h2>Update Employee</h2>
            <form className='row g-3 w-50' onSubmit={handleSubmit}>
            <div className="col-12">
                    <label htmlFor="inputEmail14" className='form-label'>Name</label>
                    <input type="text" className='form-control' id='inputName' placeholder='Enter your name' onChange={e => setData({ ...data, name: e.target.value })} 
                        autoComplete='off'
                        value={data.name}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail14" className='form-label'>Email</label>
                    <input type="email" className='form-control' id='inputEmail14' placeholder='Enter your Email' onChange={e => setData({ ...data, email: e.target.value })}
                    autoComplete='off'
                    value={data.email} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputSalary" className='form-label'>Salary</label>
                    <input type="address" className='form-control' id='inputSalary' placeholder='Enter Salary'
                    onChange={e => setData({ ...data, salary: e.target.value })} autoComplete='off' value={data.salary} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className='form-label'>Address</label>
                    <input type="address" className='form-control' id='inputAddress' placeholder='1234 Main St'
                    onChange={e => setData({ ...data, address: e.target.value })} autoComplete='off' value={data.address} />
                </div>
               
                <div className="col-12">
                    <button type='submit' className='btn btn-primary'> Create</button>
                </div>
            </form>
        </div>
    )
}

export default EditEmployee
