import React from 'react';

function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 h-full flex flex-col">
      <div className="grow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {note.title}
        </h3>
        <p className="text-gray-600 text-sm whitespace-pre-wrap">
          {note.content}
        </p>
      </div>
      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => onEdit(note)}
          className="flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
