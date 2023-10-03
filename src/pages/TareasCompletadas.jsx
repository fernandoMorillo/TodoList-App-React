import React, { useEffect, useState } from "react";
import TareasListas from "../components/TareasListas";
import { Link } from "react-router-dom";

const TareasCompletadas = () => {
    const [tareasCompletadas, setTareasCompletadas] = useState([]);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        const tareasCompletadas = tareasGuardadas.filter((tarea) => tarea.done);

        setTareasCompletadas(tareasCompletadas);
    }, []);

    return (
        <section>
            <TareasListas titulo={"Tareas Completadas"} tareas={tareasCompletadas} />
            {tareasCompletadas.length === 0 && (
                <Link to="/" className="button button--completed" style={{ margin: "0 auto" }}>
                    Ver Lista de Tareas
                </Link>
            )}
        </section>
    );
};

export default TareasCompletadas;
