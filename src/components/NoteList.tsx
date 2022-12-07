import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NoteData } from '../types/data';
import { NoteItem } from './NoteItem';

export const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes);
    return (
        <div>
            {notes.map((item: NoteData) => (
                <NoteItem data={item} key={item.id}/>
            ))}

        </div>
    );
};


