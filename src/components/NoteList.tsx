import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NoteData } from '../types/data';
import { NoteItem } from './NoteItem';
import { Col, Row } from "react-bootstrap";

export const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notesReducer.notes);
    return (
        <Row xs={1} sm={2} lg={2} xl={2} className="gy-3">
            {notes.map((item: NoteData) => (
                <Col key={item.id}>
                <NoteItem data={item} key={item.id}/>
                </Col>
            ))}

        </Row>
    );
};


