import {Link} from "react-router-dom";
import {BsFillClipboard2CheckFill, BsFillClipboard2MinusFill, BsFillClipboard2DataFill} from "react-icons/bs";

const MenuOpciones = () => {
    return (
        <>
            <section className="todo--list__options">
                <div>
                    <Link to="/tareas/completadas" className="button button--completed">
                        Tareas completadas <BsFillClipboard2CheckFill
                        size={24}/></Link>
                </div>
                <div>
                    <Link to="/tareas/pendientes" className="button button--pending">Tareas
                        Pendientes <BsFillClipboard2MinusFill
                            size={24}/></Link>
                </div>
                <div>
                    <Link to="/tareas/frecuentes" className="button button--frequent">Tareas Frecuentes
                        <BsFillClipboard2DataFill size={24} />
                    </Link>
                </div>
            </section>
        </>
    )
};

export default MenuOpciones;