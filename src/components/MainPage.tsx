import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NoteFilter } from "./NoteFilter";
import { NotesList } from "./NotesList";

export const Main: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notesReducer.notes);

    // useEffect(() => {
    //   const savedNotes: NoteData[] = JSON.parse(
    //     localStorage.getItem("react-notes-app-data") ?? ""
    //   );
    //
    //   if (savedNotes.length > 0) {
    //     setNotes(savedNotes);
    //   }
    // }, []);
    //
    // useEffect(() => {
    //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    // }, [notes]);

    return (
        <div>
            <NoteFilter/>
            <NotesList/>
        </div>
    );
};
