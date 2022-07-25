import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

import {
    createProduct,
    updateProduct,
    deleteProduct
} from '../actions/Product'

export default function Product() {

    const dispacth = useDispatch()
    const list = [];
    const datanya = useSelector((state) => state.products.value)
    const [error, setError] = useState(false)
    const [window, setWindow] = useState()
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState('')

    const toggle = () => setModal(!modal)

    const [value, setValue] = useState({
        id: '',
        nama: '',
        jenis: '',
        hargajual: '',
        hargabeli: ''
    })

    useEffect(() => {
        if (window !== undefined) {
        }
    })
    console.log(error)

    const editData = ({ id, username, name }) => {
        setModal(true)
        setAction('__edit')
        console.log('idyang di passing' + id)
        setValue({
            id: id,
            username: username,
            name: name
        })
    }
    return (
        <>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{action == '__add' ? 'Tambah data' : 'Edit Data'}</ModalHeader>
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
                                action == '__add'
                                    ?

                                    dispacth(createUser({
                                        id: Math.random(),
                                        username,
                                        name
                                    },
                                        () => {
                                            setError(true)
                                        }
                                    ))

                                    :
                                    dispacth(updateUser({
                                        id: value.id,
                                        username,
                                        name
                                    },
                                        () => {
                                            setError(true)
                                        }
                                    ))
                                setModal(false)
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
                    setAction('__add')
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
                                                <button className='btn btn-primary btn-sm' onClick={(e) => {
                                                    editData({
                                                        id: a.id,
                                                        username: a.username,
                                                        name: a.name
                                                    })
                                                }}>Edit</button>
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
