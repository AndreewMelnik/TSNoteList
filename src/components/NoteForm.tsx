import { Button, Col, Container, Form, FormControl, FormLabel, Row, Stack } from "react-bootstrap";
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { notesSlice } from "../store/notesSlice";
import { AppDispatch } from "../store/store";
import { extractTags } from "../store/util";


interface NoteFormProps {
    onClose: () => void
}

export function NoteForm({onClose}: NoteFormProps) {
    const {addNote} = notesSlice.actions;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            addNote({
                id: new Date().getTime(),
                title: title.trim(),
                description,
                tags
            })
        );
        resetForm();
        onClose();
    };

    const updateTitle = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setTitle(target.value)
    }

    const updateDescription = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setDescription(target.value)
    }

    const updateTags = (e: SyntheticEvent) => {
        const target = e.target as HTMLSelectElement;
        setTags(extractTags(target.value))
    }

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setTags([]);
    }

    return (
        <Container className="py-4 px-5">
            <FormLabel className="fs-5 mb-4">
                New Note
            </FormLabel>
            <Form onSubmit={onSubmit}>
                <Stack gap={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <FormLabel>Title</FormLabel>
                                <FormControl value={title} onChange={updateTitle} required/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="tags">
                                <FormLabel>Tags</FormLabel>
                                <FormControl value={tags} onChange={updateTags}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col>
                        <Form.Group controlId="description">
                            <FormLabel>Body</FormLabel>
                            <FormControl value={description} onChange={updateDescription}
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