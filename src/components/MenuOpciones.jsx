import {Link} from "react-router-dom";


const MenuOpciones = () => {
    return (
        <>
            <section className="todo--list__options">
                <div>
                    <Link to="/tareas/completadas" className="button button--completed">Tareas completadas</Link>
                </div>
                <div>
                    <Link to="/tareas/pendientes" className="button button--pending">Tareas Pendientes</Link>
                </div>
                <div>
                    <Link to="/tareas/frecuentes" className="button button--frequent">Tareas Frecuentes</Link>
                </div>
            </section>
        </>
    )
};

export default MenuOpciones;