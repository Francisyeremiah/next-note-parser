import TeacherClientPage from "./TeacherClientPage";
import fetchNotes from "./fetchNotes";

export default async function TeacherView(){
    const initialNotes = await fetchNotes();
    return (
        <TeacherClientPage 
            initialNotes={initialNotes} 
            fetchNotes={fetchNotes} 
        />
    )
}