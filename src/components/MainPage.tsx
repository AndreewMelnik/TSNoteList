import {NoteFilter} from "./NoteFilter";
import { NoteList } from './NoteList';

export const Main: React.FC = () => {
    return (
        <div>
            <NoteFilter/>
            <NoteList />
        </div>
    );
};
