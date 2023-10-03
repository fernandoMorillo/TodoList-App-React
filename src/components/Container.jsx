import React, { useEffect, useState } from "react";
import FormularioTodo from "./FormularioTodo";
import ListaTareas from "./ListaTareas";
import MenuOpciones from "./MenuOpciones";
import { useTareasContext } from "../context/TareaContext";

const Container = () => {
    const [listaTodo, setListaTodo] = useState([]);
    const { tareasComunes } = useTareasContext();

    const handleAgregar = (agregarItem) => {
        // Actualizar la lista de tareas de usuario
        const updatedTodoList = [...listaTodo, agregarItem];
        setListaTodo(updatedTodoList);

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem("todos", JSON.stringify(updatedTodoList));
    };

    useEffect(() => {
        // Cargar tareas de usuario desde el localStorage al iniciar la página
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        setListaTodo(tareasGuardadas);
    }, []);

    return (
        <div>
            <h1>¡Bienvenido, ingrese sus tareas!</h1>
            <FormularioTodo handleAgregar={handleAgregar} />
            {listaTodo.length ? <MenuOpciones /> : null}
            <ListaTareas listaTodo={listaTodo} setListaTodo={setListaTodo} tareasComunes={tareasComunes} />
        </div>
    );
};

export default Container;
