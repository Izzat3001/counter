import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Не нужная вещь"},
        {id: 1, value: 0, name: "ложка"},
        {id: 2, value: 0, name: "вилка"},
        {id: 3, value: 0, name: "тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},     
    ];
    const [counters, setCounters] = useState(initialState);
    const hendelDelete = (id) => {
        console.log("hendel ", id)
        const newCounters = counters.filter(count => count.id !== id)
        setCounters(newCounters)
    };

    const hendleReset = () => {
        setCounters(initialState)
        console.log("rrr")
    };

    const hendelIncrement = (id) => {
        const newValue = counters.map(item => item.id === id
            ? {...item, value: item.value + 1}
            : item);
        setCounters(newValue);
    };
    
    const hendelDecrement = (id) => {
        const newValue = counters.map(item => item.id === id
            ? {...item, value: item.value - 1}
            : item);
        setCounters(newValue);
    };

    return (
        <>
            {counters.map(count => 
                <Counter 
                    key={count.id} 
                    onIncrement={hendelIncrement}
                    onDecrement={hendelDecrement}
                    onDelete={hendelDelete}
                    {...count}
                />
            )}
            <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>Сброс</button>
        </>
    );
};

export default CounterList;