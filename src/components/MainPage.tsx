import { NoteForm } from './NoteForm';
import { NoteList } from './NoteList';

export const Main: React.FC = () => {
    return (
        <div>
            <NoteForm />
            <NoteList />
        </div>
    );
};
