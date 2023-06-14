import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide})=>{
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Add Brand' 
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'}   onClick={onHide}>Close</Button>
                <Button variant={'outline-success'}  onClick={addBrand}>Add Brand</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;
