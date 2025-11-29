import React from 'react';
import { CheckCircle, Circle, Trash } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <div className="flex items-center justify-between bg-surface p-4 rounded-lg shadow-md mb-4 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className="text-textSecondary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? <CheckCircle size={24} className="text-success" /> : <Circle size={24} />}
        </button>
        <span className={`text-lg ${todo.completed ? 'line-through text-textSecondary' : 'text-white'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="text-textSecondary hover:text-error transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error rounded-full"
        aria-label="Delete todo"
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
