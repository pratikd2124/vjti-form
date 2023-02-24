import React from 'react'
import { Form, Modal } from 'react-bootstrap'

function ModalComponent({ size, modalHeader, modalJson ,show, handleaddquestion, handleClose}) {


    return (
        <Modal size={size} show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {modalJson.map((item, index) => {
                        return (
                            <Form.Group key={index}>
                                <Form.Label>{item.label}</Form.Label>
                                {item.ftype === "control" ? 
                                <Form.Control
                                    type={item.type} placeholder={item.placeholder}
                                    onChange={(e) => item.varSet(e.target.value)}
                                    defaultValue={item.dvalue || ""}
                                /> :
                                item.ftype === "select" ? 
                                <Form.Select defaultValue={item.dvalue} onChange={(e)=>{item.varSet(e.target.value)}} >
                                    {item.options.map((option, index) => {
                                        return (
                                            <option key={index} value={option.value}>{option.label}</option>
                                        )
                                    })}
                                </Form.Select>
                                :""
                                }
                            </Form.Group>
                        )
                    })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleClose}>Close</button>
                <button className="btn btn-primary" onClick={() =>{handleaddquestion()}}>Save Changes</button>
            </Modal.Footer>
        </Modal>
    )
}


export default ModalComponent
