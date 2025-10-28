import React, { useState } from 'react';
import NoteForm from './components/Noteform';
import DeleteConfirmDialog from './components/DeleteConfirmDialog'
import NotesList from './Components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // Create - Add new note
  const handleAddNote = (noteData) => {
    const newNote = {
      id: Date.now(),
      ...noteData,
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
  };

  // Update - Edit existing note
  const handleUpdateNote = (noteData) => {
    setNotes(notes.map(note => 
      note.id === editingNote.id 
        ? { ...note, ...noteData, updatedAt: new Date().toISOString() }
        : note
    ));
    setEditingNote(null);
  };

  // Delete - Remove note
  const handleDeleteNote = () => {
    setNotes(notes.filter(note => note.id !== deleteId));
    setDeleteId(null);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          📝 My Notes App
        </h1>
        
        <NoteForm
          onSave={editingNote ? handleUpdateNote : handleAddNote}
          editingNote={editingNote}
          onCancel={handleCancelEdit}
        />

        <NotesList
          notes={notes} 
          onEdit={handleEdit}
          onDelete={(id) => setDeleteId(id)}
        />

        <DeleteConfirmDialog
          open={deleteId !== null}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;