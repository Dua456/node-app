import React, { useState } from 'react';

function NoteForm({ onSave, editingNote, onCancel }) {
  const [title, setTitle] = useState(editingNote?.title || '');
  const [content, setContent] = useState(editingNote?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSave({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {editingNote ? 'Edit Note' : 'Add New Note'}
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {editingNote ? 'Update' : 'Add Note'}
          </button>
          {editingNote && (
            <button
              onClick={onCancel}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
