
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plusicon from "../context/plus.jpg"
import minusicon from "../context/minus.png"

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button style={{marginLeft:"25px", borderColor: "white",}} onClick={event=> increaseAllocation(props.name)}><img alt="plus"  style={{width: "20px"}} src={plusicon} /></button></td>
        <td><button style={{marginLeft:"12px", borderColor: "white",}} onClick={event=> decreaseAllocation(props.name)}><img alt="minus"  style={{width: "20px"}} src={minusicon} /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;