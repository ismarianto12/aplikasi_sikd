
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, updateUser, deleteUser } from '../actions/Users'
// import 

function User() {
    const dispacth = useDispatch()
    const list = [];
    const datanya = useSelector((state) => state.users.value);
    const [error, setError] = useState(false)
    // const 

    const [value, setValue] = useState({
        username: '',
        name: ''
    })
    console.log(error)
    const j = 1;
    return (
        <>
            <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/dist/css/AdminLTE.min.css" />

                <div className='container'>
                    <br />
                    <h3>
                        <i className='fa fa-users'></i> Data User
                    </h3>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
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

                                    const username = value.username
                                    const name = value.name;
                                    dispacth(createUser({
                                        id: Math.random(),
                                        username,
                                        name
                                    },
                                        () => {
                                            setError(true)
                                        }
                                    ))
                                    // }
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

                    <hr />
                    <table className='table table-border table-striped'>
                        <tr>

                            <th>#</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Action</th>

                        </tr>
                        {
                            datanya.map((a) => {
                                return (
                                    <>
                                        <tr>
                                            <td>
                                                {j + 1}
                                            </td>
                                            <td>
                                                {a.username}
                                            </td>
                                            <td>
                                                {a.name}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>Edit</button>
                                                <button className='btn btn-danger btn-sm' onClick={(e) => {
                                                    dispacth(deleteUser({
                                                        id: a.id
                                                    }))
                                                }}> Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                                // j
                            })
                        }
                    </table>

                </div>
            </>

            )
}



            export default User