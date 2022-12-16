import { AppDispatch } from "../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NoteData } from "../types/data";
import { deleteNote, updateNote } from "../store/notesSlice";
import { Badge, Button, Card, FormControl, ListGroup, Stack } from "react-bootstrap";
import { extractTags } from "../store/util";
import "../style.scss";

interface NotesItemProps {
    data: NoteData;
}

export const NoteItem: React.FC<NotesItemProps> = (props) => {
    const [title, setTitle] = useState(props.data.title);
    const [description, setDescription] = useState(props.data.description);
    const [tags, setTags] = useState(props.data.tags);
    const dispatch = useDispatch<AppDispatch>();
    const [NoteEdit, setNoteEdit] = useState(false);


    const submitEdit = () => {
        setNoteEdit(false);
        dispatch(
            updateNote({
                id: props.data.id,
                title: title,
                description: description,
                tags: tags,
            })
        );
    };
    return (
        <Card className={"h-100 mt-4 text-reset text-decoration-none"}>
            <Card.Body className={"overflow-hidden"}>
                <Stack
                    gap={2}
                    className="align-items-baseline justify-content-center h-100"
                >
                    {!NoteEdit ? (
                        <>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto text-break">
                                    <div className="fw-bold">{title}</div>
                                    {description}
                                </div>
                                <Badge bg="primary" pill>
                                    {tags}
                                </Badge>
                            </ListGroup.Item>
                        </>
                    ) : (
                        <>
                            <FormControl
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <FormControl
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <FormControl
                                value={tags}
                                onChange={(e) => setTags(extractTags(e.target.value))}
                            />
                        </>
                    )}
                    <Stack
                        gap={1}
                        direction="horizontal"
                        className="justify-content-center flex-wrap"
                    ></Stack>
                    <Stack direction="horizontal" gap={2} className="justify-content-end">
                        {!NoteEdit ? (
                            <Button
                                onClick={() => setNoteEdit(true)}
                                variant="primary"
                                type="submit"
                                size="sm"
                            >
                                Edit
                            </Button>
                        ) : (
                            <Button
                                onClick={submitEdit}
                                variant="primary"
                                type="submit"
                                size="sm"
                            >
                                Submit
                            </Button>
                        )}
                        <Button
                            onClick={() => dispatch(deleteNote(props.data.id))}
                            variant="light"
                            type="submit"
                            size="sm"
                        >
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </Card.Body>
        </Card>
    );
};

