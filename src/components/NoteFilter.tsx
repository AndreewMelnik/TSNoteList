import { Button, Col, Form, FormControl, FormLabel, InputGroup, Modal, Row, } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setTags } from "../store/filterSlice";
import { NoteForm } from "./NoteForm";
import { extractTags } from "../store/util";
import { RootState } from "../store/store";
import { BsSearch } from "react-icons/bs";

export const NoteFilter = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const tags = useSelector(
        (state: RootState) => state.filtersReducer.tags
    );

    return (
        <>
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Your Notes</h1>
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
                            <InputGroup>
                                <FormControl
                                    onChange={(event) =>
                                        dispatch(setSearchQuery(event.target.value))
                                    }
                                    placeholder="Search"
                                />
                                <InputGroup.Text>
                                    <BsSearch/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <FormLabel>Tags</FormLabel>
                            <InputGroup>
                                <InputGroup.Text>
                                    #
                                </InputGroup.Text>
                                <FormControl

                                    onChange={(event) =>
                                        dispatch(setTags(extractTags(event.target.value)))
                                    }
                                    value={tags}
                                    placeholder="Search"/>
                                <InputGroup.Text>
                                    <BsSearch/>
                                </InputGroup.Text>
                            </InputGroup>
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
