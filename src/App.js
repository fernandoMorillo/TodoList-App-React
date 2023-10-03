import Container from "./components/Container";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TareasFrecuentes from "./components/TareasFrecuentes";
import TareasPendientes from "./components/TareasPendientes";
import TareasCompletadas from "./components/TareasCompletadas";


function App() {
    return (
        <div className="App">
            {/*<Container/>*/}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Container/>}/>
                    <Route path="/tareas/pendientes" element={<TareasPendientes/>}/>
                    <Route path="/tareas/completadas" element={<TareasCompletadas/>}/>
                    <Route path="/tareas/frecuentes" element={<TareasFrecuentes/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
