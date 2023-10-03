import React, {useEffect, useState} from "react";
import TareasListas from "../components/TareasListas";
import {Link} from "react-router-dom";

const TareasPendientes = () => {
    const [tareasPendientes, setTareasPendientes] = useState([]);


    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        const tareasPendientes = tareasGuardadas.filter((tarea) => !tarea.done);

        setTareasPendientes(tareasPendientes);
    }, []);

    return (
        <section>
            <TareasListas titulo={"Tareas Pendientes"} tareas={tareasPendientes}/>
            {tareasPendientes.length === 0 && (
                <Link to="/" className="button button--completed" style={{margin: "0 auto"}}>Ver Lista de
                    Tareas</Link>
            )}
        </section>
    );
};

export default TareasPendientes;
