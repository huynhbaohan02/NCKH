import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const { ID } = useParams();
    const navigate = useNavigate();
  
    function handleSubmit(event) {
      event.preventDefault();
      axios
        .put(`localhost:8080/update/${ID}`, { Name, Email })
        .then(res => {
          console.log(res);
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  
    return (
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={handleSubmit}>
            <h2>Update Student</h2>
            <div className='mb-2'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter Name'
                className='form-control'
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                className='form-control'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button className='btn btn-success'>Update</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default UpdateStudent