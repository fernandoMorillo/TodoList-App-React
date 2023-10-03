import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const TareasCompletadas = () => {
    const [tareasCompletadas, setTareasCompletadas] = useState([]);
    const [tieneTareasCompletadas, setTieneTareasCompletadas] = useState(false);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        const tareasCompletadas = tareasGuardadas.filter((tarea) => tarea.done);

        setTareasCompletadas(tareasCompletadas);
        setTieneTareasCompletadas(tareasCompletadas.length > 0);
    }, []);

    return (
        <section>
            <h1>Tareas Completadas</h1>
            {tieneTareasCompletadas ? (
                <div>
                    <ul>
                        {tareasCompletadas.map((tarea) => (
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
                    <p>No hay tareas completadas</p>
                    <Link to="/" className="button button--completed" style={{margin: "0 auto"}}>Ver Lista de
                        Tareas</Link>
                </div>

            )}
        </section>
    );
};

export default TareasCompletadas;
