import React, { useState } from 'react';

interface Note {
  title: string;
  content: string;
}

interface NoteInputProps {
  onAddNote: (note: Note) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      onAddNote({ title, content });
      setTitle('');
      setContent('');
    } else {
      alert('Please fill in both the title and content.');
    }
  };

  return (
    <div className="p-4 bg-gray-700 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add a Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
      ></textarea>
      <button
        onClick={handleAddNote}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteInput;
