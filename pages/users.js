
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, updateUser, deleteUser } from '../actions/Users'

function User() {
    const dispacth = useDispatch()
    const list = [];
    const datanya = useSelector((state) => state.users.value);
    const [error, setError] = useState(false)

    const [value, setValue] = useState({
        username: '',
        name: ''
    })
    console.log(error)
    return (
        <>

            <div className='container'>
                <br />
                <h3>
                    <i className='fa fa-users'></i> Data User
                </h3>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>

                            {datanya.map((a) => {
                                return (
                                    <>
                                        <div className='alert alert-danger'>
                                            {a.username}
                                            {a.name}
                                            <div className='text-left'>
                                                <i className='fa fa-trash'></i>
                                                Delete
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            }
                            <br />
                            <label className='form-label'>Username</label>
                            <input type={'text'} className="form-control" name={'username'} value={value.username} onChange={(e) => {
                                setError(true)
                                setValue({
                                    ...value,
                                    username: [e.target.value]
                                })
                            }} />

                            <center>  {error && value.username == '' ? 'wajib di isi' : ''}</center>
                            <br></br>
                            <label className='form-label'>Name</label>

                            <input type={'text'} className="form-control" name={'name'} value={value.name} onChange={(e) => {
                                setValue({
                                    ...value,
                                    name: [e.target.value]
                                }, () => {
                                    setError(true)
                                })
                            }} />
                            <br></br>
                            <center> {error && value.name == '' ? 'wajib di isi' : ''} </center>

                            <button className='btn btn-primary' onClick={() => {
                                event.preventDefault();
                                if (error) {
                                    alert('inputan wajib di isi')
                                } else {
                                    const username = value.username
                                    const name = value.name;
                                    dispacth(createUser({
                                        id: 1,
                                        username,
                                        name
                                    },
                                        () => {
                                            setError(true)
                                        }
                                    ))
                                }
                            }}>Simpan</button>
                            <button className='btn btn-danger' onClick={() => {
                                setValue({
                                    username: '',
                                    name: ''
                                })
                            }}>Reset</button>


                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}



export default User