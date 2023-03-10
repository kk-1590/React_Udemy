import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const filterChangeHandler  = selectedYear => {
        // console.log('Expenses.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const [filteredYear,setFilteredYear] = useState('2020');

    const filteredExpenses = props.obj.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/* {props.obj.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))} */}
                {/* {filteredExpenses.length === 0 ? (<p>No expenses found</p>) : (     //conditional expression
                    filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}/>
                    ))
                )} */}
                {/* {expensesContent} */}
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items = {filteredExpenses}/>
                {/* <ExpenseItem title = {props.obj[0].title} amount = {props.obj[0].amount} date = {props.obj[0].date}></ExpenseItem>
                <ExpenseItem title = {props.obj[1].title} amount = {props.obj[1].amount} date = {props.obj[1].date}></ExpenseItem>
                <ExpenseItem title = {props.obj[2].title} amount = {props.obj[2].amount} date = {props.obj[2].date}></ExpenseItem>
                <ExpenseItem title = {props.obj[3].title} amount = {props.obj[3].amount} date = {props.obj[3].date}></ExpenseItem> */}
            </Card>
        </div>
    );
}

export default Expenses;