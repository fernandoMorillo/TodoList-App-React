import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const TareasPendientes = () => {
    const [tareasPendientes, setTareasPendientes] = useState([]);
    const [tieneTareasPendientes, setTieneTareasPendientes] = useState(false);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        const tareasPendientes = tareasGuardadas.filter((tarea) => !tarea.done);

        setTareasPendientes(tareasPendientes);
        setTieneTareasPendientes(tareasPendientes.length > 0);
    }, []);

    return (
        <section>
            <h1>Tareas Pendientes</h1>
            {tieneTareasPendientes ? (
                <div>
                    <ul>
                        {tareasPendientes.map((tarea) => (
                            <li
                                className="todo news-item"
                                style={{
                                    color: tarea.done ? "green" : "black",
                                    border: tarea.done
                                        ? "1px solid green"
                                        : "1px solid red",
                                }}
                                key={tarea.id}
                            >
                                {tarea.done ? "✅" : "❌"} {tarea.description}
                            </li>

                        ))}
                    </ul>
                    <Link to="/" className="button button--completed" style={{margin: "0 auto"}}>Ver Lista de
                        Tareas</Link>
                </div>

            ) : (
                <div>
                    <p>No hay tareas pendientes</p>
                    <Link to="/" className="button button--completed" style={{margin: "0 auto"}}>Ver Lista de
                        Tareas</Link>
                </div>

            )}
        </section>
    );
};

export default TareasPendientes;
