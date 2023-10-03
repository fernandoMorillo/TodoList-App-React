import React from "react";
import {BsFillTrash3Fill} from "react-icons/bs";

const CheckBox = ({item, onChangeStatus, onDelete}) => {
    return (
        <label className="todo news-item fade-out-element" style={{
            backgroundColor: item.done ? '#0080001a' : '#ff00003b',
            border: item.done ? '2px dashed green' : '2px dashed red'
        }}>
            <input
                className="todos__state"
                name={item.id}
                type="checkbox"
                defaultChecked={item.done}
                onChange={() => onChangeStatus(item.id)}
            />
            <div className="todos__description" style={{color: item.done ? 'green' : 'black'}}>
                {item.description}
            </div>
            <button className="button button--delete button--delete__icons" onClick={() => onDelete(item.id)}>
                <BsFillTrash3Fill size={24}/>
            </button>
        </label>
    );
};

export default CheckBox;
