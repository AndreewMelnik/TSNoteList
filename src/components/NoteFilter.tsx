import { Button, Col, Form, FormControl, FormLabel, Modal, Row, } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/filterSlice";
import { NoteForm } from "./NoteForm";

export const NoteFilter = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Notes</h1>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={handleShow}>
                        Create Note
                    </Button>
                </Col>
            </Row>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Group controlId="title">
                            <FormLabel>Title</FormLabel>
                            {/*//ниже мы отслеживаем введенные данные и записываем их в состояние searchQuery*/}
                            <FormControl
                                onChange={(event) =>
                                    dispatch(setSearchQuery(event.target.value))
                                }
                                placeholder="Enter title to find"
                            />
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
    );
};
