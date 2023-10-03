import React from "react";
import CheckBox from "./CheckBox";

const ListaTareas = ({listaTodo, setListaTodo}) => {
    const toggleTaskStatus = (taskId) => {
        const updatedTodos = listaTodo.map((todo) =>
            todo.id === taskId ? {...todo, done: !todo.done} : todo
        );
        setListaTodo(updatedTodos);
        actualizarLocalStorage(updatedTodos);
    };

    const handleDelete = (taskId) => {
        const updatedTodos = listaTodo.filter((todo) => todo.id !== taskId);
        setListaTodo(updatedTodos);
        actualizarLocalStorage(updatedTodos);
    };

    const actualizarLocalStorage = (data) => {
        localStorage.setItem("todos", JSON.stringify(data));
    };

    return (
        <div className="todo--list">
            {listaTodo.length ? (
                listaTodo.map((item) => (
                    <CheckBox
                        key={item.id}
                        item={item}
                        onChangeStatus={toggleTaskStatus}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <p>En este momento no hay tareas</p>
            )}

            {listaTodo.length > 0 && (
                <div className="todo--list__info">
                    <h3>Tareas completadas: {listaTodo.filter((item) => item.done).length}</h3>
                    <h3>Tareas pendientes: {listaTodo.filter((item) => !item.done).length}</h3>
                    <h3>Tareas totales: {listaTodo.length}</h3>
                </div>
            )}
        </div>
    );
};

export default ListaTareas;
