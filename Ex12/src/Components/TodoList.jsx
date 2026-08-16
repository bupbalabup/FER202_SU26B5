import React, { useState } from 'react';
import { Button, Row, Col, Form,} from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [todoId, setTodoId] = useState(0);


  const handleChange = (e) => {
    setInput(e.target.value);
  };


  const handleCreate = () => {
    if (input.trim() === "") return;
    const newTodo = { id: todoId, text: input };
    setTodos([...todos, newTodo]);
    setTodoId(todoId + 1);
    setInput("");
  };


  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <Row>
        <Col md={7}>
          <Row>
            <Col md={8}>
              <Form.Control type="text" placeholder="Please input a Task" value={input} onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Button variant='danger' onClick={handleCreate}>Add Todo</Button>
            </Col>
          </Row>
        </Col>
        <Col md={5} className="shadow p-3 mb-5 bg-white rounded">
          <ul style={{ listStyle: "none", padding: 0 }}>
            <h3 className="text-center">Todo List</h3>
            {todos.map((todo) => (
              <li key={todo.id} className="shadow-sm p-2 mb-2 bg-white rounded">
                <Row className="pt-2">
                  <Col md={8}>
                    {todo.text}
                  </Col>
                  <Col md={4} className="text-end">
                    <Button variant='danger'  onClick={() => handleDelete(todo.id)}>Delete</Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      </div>
  );
}

export default TodoList;
