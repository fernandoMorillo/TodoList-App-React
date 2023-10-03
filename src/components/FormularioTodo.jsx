import React, { useState } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
const FormularioTodo = ({ handleAgregar }) => {
    const [descriptionInput, setDescriptionInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!descriptionInput) {
            return; // Evita agregar tareas vacías
        }

        const newTask = {
            description: descriptionInput,
            done: false,
            id: Date.now(),
        };

        // Llama a la función para agregar la tarea
        handleAgregar(newTask);

        // Limpia el campo de entrada y actualiza el localStorage
        setDescriptionInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text-input"
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />

                    <button className="button pink" disabled={!descriptionInput}>
                        <BsFillBookmarkPlusFill  size={20}/> Agregar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormularioTodo;
