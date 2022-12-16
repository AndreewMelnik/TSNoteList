import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NoteData } from "../types/data";
import { NoteItem } from "./NoteItem";
import { Col, Row } from "react-bootstrap";
import { useMemo } from "react";

export const NotesList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notesReducer.notes);
    const searchQuery = useSelector(
        (state: RootState) => state.filtersReducer.searchQuery
    );
    const tags = useSelector(
        (state: RootState) => state.filtersReducer.tags
    );
    //берем из рутстейта наш комбайн редьюсер, и через фильтерс редьюсер берем то состояние, которое мы ввели в
    // searchQuery, и с помощью useMemo мы переписываем notes по условию внутри includes(введённые данные)
    const filteredNotes = useMemo(
        () =>
            notes.filter((note) =>
                note.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                note.tags.toString().includes(tags.toString())
            ),
        [notes, searchQuery, tags]
    );

    return (
        <Row xs={1} sm={2} lg={2} xl={2} className="pb-4 gy-3">
            {filteredNotes.map((item: NoteData) => (
                <Col key={item.id}>
                    <NoteItem key={item.id} data={item}/>
                </Col>
            ))}
        </Row>
    );
};
