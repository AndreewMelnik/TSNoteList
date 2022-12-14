import { Button, Col, Container, Form, FormControl, FormLabel, Row, Stack, Modal } from "react-bootstrap";
import { extractTags } from "../store/util";
import { useState } from "react";
import { NoteForm } from "./NoteForm";



export function NoteFilter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
            <>
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Notes</h1>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={handleShow}>Create Note</Button>
                </Col>
            </Row>
            <Form>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group controlId="title">
                                <FormLabel>Title</FormLabel>
                                <FormControl  required placeholder="Enter title to find"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="tags">
                                <FormLabel>Tags</FormLabel>
                                <FormControl placeholder="Enter tags to find"/>
                            </Form.Group>
                        </Col>
                    </Row>
            </Form>
            <Modal className="modal-lg" show={show} onHide={handleClose}>
                <NoteForm show={show} onClose={handleClose}/>
            </Modal>
            </>

    )
}