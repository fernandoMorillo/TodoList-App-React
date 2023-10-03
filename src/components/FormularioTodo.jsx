import React, { useState } from "react";

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
                        Agregar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormularioTodo;
