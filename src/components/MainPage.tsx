import {NoteFilter} from "./NoteFilter";
import { NoteList } from './NoteList';
import { useState } from "react";
import { NoteData } from "../types/data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Col, Row } from "react-bootstrap";
import { NoteItem } from "./NoteItem";


// export const NoteList: React.FC = () => {
//     const notes = useSelector((state: RootState) => state.notesReducer.notes);
//     return (
//         <Row xs={1} sm={2} lg={2} xl={2} className="gy-3">
//             {notes.map((item: NoteData) => (
//                 <Col key={item.id}>
//                     <NoteItem data={item} key={item.id}/>
//                 </Col>
//             ))}
//
//         </Row>
//     );
// };
const searchProps = {
    notes: this.props.notes
}
export const Main: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notesReducer.notes);
    // const [notes, setNotes] = useState([
    //     {
    //         id: new Date().getTime(),
    //         title: 'This is my first note!',
    //
    //     },
    //     {
    //         id: new Date().getTime(),
    //         title: 'This is my second note!',
    //
    //     }])
    const [searchText, setSearchText] = useState('');



    return (
        <div>
            <NoteFilter handleSearchNote={setSearchText}/>
            <NoteList
             //   />
            {...notes.filter((item: NoteData) =>
                item.title.toLowerCase().includes(searchText)
            )}/>
        </div>
    );
};





//	useEffect(() => {
// 		const savedNotes = JSON.parse(
// 			localStorage.getItem('react-notes-app-data')
// 		);
//
// 		if (savedNotes) {
// 			setNotes(savedNotes);
// 		}
// 	}, []);
//
// 	useEffect(() => {
// 		localStorage.setItem(
// 			'react-notes-app-data',
// 			JSON.stringify(notes)
// 		);
// 	}, [notes]);