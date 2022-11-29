import React, {useState} from "react";


const Counter = (props) => {
    const { value } = props

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBadgeClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const hendelIncrement = (id) => {
        props.onIncrement(props.id)
    };
    const hendelDecrement = (id) => {
        props.onDecrement(props.id)
    }
    
    return (
        <div>
            <span className="">{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={hendelIncrement}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={hendelDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>delete</button>
        </div>
    )
};

export default Counter