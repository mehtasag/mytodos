import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
      />
      <button
        type="submit"
        className="bg-primary text-white p-3 rounded-lg shadow-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-all duration-200 flex items-center justify-center"
        aria-label="Add todo"
      >
        <Plus size={24} />
      </button>
    </form>
  );
};

export default TodoForm;
