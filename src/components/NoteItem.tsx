import { AppDispatch } from '../store/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteData } from "../types/data";
import { notesSlice } from "../store/notesSlice";
import { Button, Card, FormControl, Stack } from "react-bootstrap";
import "../style.scss"


interface NotesItemProps {
    data: NoteData;
}

const NoteItem: React.FC<NotesItemProps> = (props) => {

    const [title, setTitle] = useState(props.data.title);
    const [description, setDescription] = useState(props.data.description);
    const dispatch = useDispatch<AppDispatch>();
    const {deleteNote, updateNote} = notesSlice.actions;
    const [NoteEdit, setNoteEdit] = useState(false);

    const handleInput = (value: string) => {
        setTitle(value);
        setDescription(value);
    };

    const submitEdit = () => {
        setNoteEdit(false);
        dispatch(updateNote({id: props.data.id, title: title, description: description}));
    }
    return (
        <div className="card">
            <Card className={"h-100 text-reset text-decoration-none"}>
                <Card.Body>
                    <Stack gap={2} className="align-items-center justify-content-center h-100">
                        {!NoteEdit ? (
                            <>
                                <span className="fs-5">{title}</span>
                                <span className="fs-5">{description}</span>
                            </>
                        ) : (
                            <>
                                <FormControl value={title} onChange={e => setTitle(e.target.value)}/>
                                <FormControl value={description} onChange={e => setDescription(e.target.value)}/>
                            </>)}
                        <Stack
                            gap={1}
                            direction="horizontal"
                            className="justify-content-center flex-wrap"
                        >
                        </Stack>
                        <Stack direction="horizontal" gap={2} className="justify-content-end">
                            <Button onClick={() => dispatch(deleteNote(props.data.id))} variant="light" type="submit"
                                    size="sm">
                                Delete
                            </Button>
                            {!NoteEdit ? (
                                <Button onClick={() => setNoteEdit(true)} variant="light" type="submit" size="sm">
                                    Edit
                                </Button>
                            ) : (
                                <Button onClick={submitEdit} variant="light" type="submit" size="sm">
                                    Submit
                                </Button>
                            )}
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card>
        </div>
    )
}


export { NoteItem }