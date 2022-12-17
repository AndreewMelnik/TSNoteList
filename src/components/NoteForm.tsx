import { Button, Col, Container, Form, FormControl, FormLabel, Row, Stack } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notesSlice } from "../store/notesSlice";
import { AppDispatch } from "../store/store";
import { extractTags } from "../store/util";


export function NoteForm(props: { show: any; onClose: any; onSubmit: any }) {

    const [show, setShow] = useState(true);
    const {onClose} = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const {addNote} = notesSlice.actions;
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // setShow(false);
        dispatch(addNote({id: new Date().getTime(), title: title.trim(), description: description, tags: tags}));
        setTitle('');
        setDescription('')
        setTags([])
    };

    return (
        <Container className="py-4 px-5">
            <FormLabel className="fs-5 mb-4"> New Note</FormLabel>
            <Form onSubmit={onSubmit}>
                <Stack gap={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <FormLabel>Title</FormLabel>
                                <FormControl value={title} onChange={e => setTitle(e.target.value)} required/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="tags">
                                <FormLabel>Tags</FormLabel>
                                <FormControl value={tags} onChange={e => setTags(extractTags(e.target.value))}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col>
                        <Form.Group controlId="description">
                            <FormLabel>Body</FormLabel>
                            <FormControl value={description} onChange={e => setDescription(e.target.value)}
                                         as="textarea" rows={8}/>
                        </Form.Group>
                    </Col>
                    <Stack direction="horizontal" gap={2} className="justify-content-end">
                        <Button
                            type="submit" variant="primary" onSubmit={onSubmit} onClick={onClose}>
                            Save
                        </Button>
                        <Button type="button" variant="outline-secondary" onClick={onClose}>
                            Cancel
                        </Button>
                    </Stack>
                </Stack>
            </Form>
        </Container>

    )
}