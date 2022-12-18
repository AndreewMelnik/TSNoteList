import { NoteFilter } from "./NoteFilter";
import { NotesList } from "./NotesList";

export const Main: React.FC = () => {
    return (
        <div>
            <NoteFilter/>
            <NotesList/>
        </div>
    );
};
