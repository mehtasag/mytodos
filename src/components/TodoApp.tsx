import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';
import { ListTodo } from 'lucide-react'; // Using ListTodo for the app icon

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-surface rounded-2xl shadow-2xl p-8 border border-border">
        <header className="flex items-center justify-center gap-3 mb-10">
          <ListTodo size={48} className="text-primary" />
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Bolt <span className="text-primary">Tasks</span>
          </h1>
        </header>

        <TodoForm onAddTodo={addTodo} />

        {todos.length === 0 ? (
          <p className="text-center text-textSecondary text-lg italic">No tasks yet! Add one above.</p>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={toggleComplete}
                onDeleteTodo={deleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
