// TareasContext.js
import React, {createContext, useContext, useState} from "react";

const TareasContext = createContext();

export const useTareasContext = () => {
    return useContext(TareasContext);
};

export const TareasProvider = ({children}) => {
    const [tareasUsuario, setTareasUsuario] = useState([]);


    // Función para agregar una tarea a la lista de usuario
    const agregarTareaUsuario = (tarea) => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("todos")) || [];
        setTareasUsuario([...tareasGuardadas, tarea]);
        localStorage.setItem("todos", JSON.stringify([...tareasGuardadas, tarea]));
    };

    return (
        <TareasContext.Provider value={{tareasUsuario, agregarTareaUsuario}}>
            {children}
        </TareasContext.Provider>
    );
};
