import {Link} from "react-router-dom";
import React from "react";

const TareasListas = ({tareas, titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            {tareas.length ? (
                <div>
                    <ul>
                        {tareas.map((tarea) => (
                            <li
                                className="todo news-item"
                                style={{
                                    color: tarea.done ? "green" : "black",
                                    border: tarea.done ? "1px solid green" : "1px solid red",
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
                <p>No hay tareas {titulo.toLowerCase()}</p>
            )}
        </div>
    );
};

export default TareasListas;