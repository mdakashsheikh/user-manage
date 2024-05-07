import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const { id } = useParams()

    const { name, username, email } = user;

    const navegate = useNavigate();

    const inputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8080/user/${id}`, user)
        
        navegate('/')
    }

    const loadUser = async() => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-lebel'>
                                Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your name'
                                name='name'
                                value={name}
                                onChange={inputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-lebel'>
                                Username
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                name='username'
                                value={username}
                                onChange={inputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-lebel'>
                                E-Mail
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Enter your email'
                                name='email'
                                value={email}
                                onChange={inputChange}
                            />
                        </div>
                        <Link to={'/'} type='submit' className='btn btn-outline-danger'>Cancel</Link>
                        <button type='submit' className='btn btn-outline-primary mx-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser