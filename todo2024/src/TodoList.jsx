import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "no todos"}
      {todos.map((todo) => {
        return (
          <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        );
      })}
    </ul>
  );
}