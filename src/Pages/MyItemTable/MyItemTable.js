import React, { useState } from 'react';
import './MyItemTable.css'
import { Button, Modal } from 'react-bootstrap';

const MyItemTable = (props) => {
    const { _id, name, price, quantity, supplierName, image } = props.myItem;
    const { handleMyItemDelete } = props;

    // modal
    const [show, setShow] = useState(false);
    const handleShow = _id => {
        setShow(false);
        handleMyItemDelete(_id);
    }
    return (
        <tr>
            <td className='align-middle'>{_id}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{price}</td>
            <td className='align-middle'>{quantity}</td>
            <td className='align-middle'>{supplierName}</td>
            <td className='w-25'><img className='img-thumbnail img-width' src={image} alt="" /></td>
            <td className='align-middle'><button onClick={() => setShow(true)} className='btn btn-danger'>Delete</button></td>
            <Modal
                onHide={() => setShow(false)}
                show={show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-success'>
                        Are You sure ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-success'>You want to delete this item</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={() => { handleShow(_id) }}>Yes</Button>
                    <Button variant='danger' onClick={() => { setShow(false) }}>No</Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default MyItemTable;