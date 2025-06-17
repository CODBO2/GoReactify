import React, { useState } from "react";
import styles from "./todo.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Row from "../../components/Row/Row";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { text: input, done: false }]);
            setInput("");
        }
    };

    const toggleTodo = idx => {
        setTodos(todos =>
            todos.map((todo, i) =>
                i === idx ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const removeTodo = idx => {
        setTodos(todos => todos.filter((_, i) => i !== idx));
    };

    return (
        <div className={styles.todoBg}>
            <div className={styles.todoContainer}>
                <h1>Todo</h1>
                <Row className={styles.addRow}>
                    <Input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Nueva tarea..."
                        onKeyDown={e => e.key === "Enter" && addTodo()}
                    />
                    <Button onClick={addTodo} aria-label="Agregar tarea">
                        +
                    </Button>
                </Row>
                <div className={styles.todoList}>
                    {todos.map((todo, idx) => (
                        <div className={styles.todoItem} key={idx}>
                            <span
                                className={
                                    todo.done
                                        ? `${styles.todoText} ${styles.todoDone}`
                                        : styles.todoText
                                }
                            >
                                {todo.text}
                            </span>
                            <div className={styles.todoButtons}>
                                <Button
                                    icon={todo.done ? "✖" : "✔"}
                                    onClick={() => toggleTodo(idx)}
                                    aria-label={todo.done ? "Marcar como pendiente" : "Marcar como completada"}
                                    style={{ minWidth: 32 }}
                                />
                                <Button
                                    icon={"🗑"}
                                    onClick={() => removeTodo(idx)}
                                    aria-label="Eliminar tarea"
                                    style={{ minWidth: 32 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}