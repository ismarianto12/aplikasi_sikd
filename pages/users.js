
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, updateUser, deleteUser } from '../actions/Users'
// import Rodal from 'rodal';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

function User() {
    const dispacth = useDispatch()
    const list = [];
    const datanya = useSelector((state) => state.users.value)
    const [error, setError] = useState(false)
    const [window, setWindow] = useState()
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [value, setValue] = useState({
        username: '',
        name: ''
    })

    useEffect(() => {
        if (window !== undefined) {
        }
    })
    console.log(error)

    const j = 1;
    return (
        <>


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <br />
                    <h3>
                        <i className='fa fa-users'></i> Data User
                    </h3>
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
                                setModal(false);
                            }}>Simpan</button>
                            <button className='btn btn-danger' onClick={() => {
                                setValue({
                                    username: '',
                                    name: ''
                                })
                            }}>Reset</button>


                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <div className='container'>
                <br />
                <h3>
                    <i className='fa fa-users'></i> Data User
                </h3>

                <hr />
                <button className='btn btn-primary' onClick={() => {
                    setModal(true)
                }}>Tambah</button>
                <br /><br />
                <table className='table table-border table-striped'>
                    <tr>

                        <th>#</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Action</th>

                    </tr>
                    <tbody>
                        {
                            datanya.map((a, j) => {
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
                    </tbody>
                </table>

            </div>
        </>

    )
}



export default User