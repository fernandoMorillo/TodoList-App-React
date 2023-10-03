import React, {useState, useEffect} from "react";

import {Link, useNavigate} from 'react-router-dom';

import axiosInstance from "../config/axiosInstance";

import Swal from 'sweetalert2';


import {useTareasContext} from "../context/TareaContext";

const TareasFrecuentes = () => {

    const [tareasFrecuentes, setTareasFrecuentes] = useState([]);
    const {agregarTareaUsuario} = useTareasContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('tareas');
                setTareasFrecuentes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const agregarTarea = (task) => {


        Swal.fire({
            title: 'Tarea Agregada',
            text: 'La tarea se ha agregado con éxito',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ver Lista de Tareas',
            cancelButtonText: 'Permanecer en esta página'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
            }
        });

        agregarTareaUsuario({
            description: task.description,
            done: false,
            id: task.id
        });
    };

    return (
        <section>
            <h1>Tareas Frecuentes</h1>
            <div>
                <ul>
                    {tareasFrecuentes.map((task) => (
                        <li className="todo news-item" key={task.id} style={{
                            color: task.done ? 'green' : 'black',
                            border: task.done ? '1px solid green' : '1px solid red'
                        }}>
                            {task.done ? "✅" : "❌"} {task.description}
                            <button className="button button--completed" onClick={() => agregarTarea(task)}>
                                Agregar a Mi Lista
                            </button>
                        </li>

                    ))}
                </ul>
                <Link to="/" className="button button--completed" style={{margin: "0 auto"}}>Ver Lista de
                    Tareas</Link>
            </div>

        </section>
    );
};

export default TareasFrecuentes;
