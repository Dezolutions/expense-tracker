import '../css/header.css'
import {useSelector} from 'react-redux'
import {Trans, TransObj} from '../types/types'

function Header() {
  const transactions = useSelector((reducer:TransObj)=>reducer.transactions)

  //считаем баланс
  const total = transactions.reduce((acc:number,item:Trans)=> acc + +item.amount,0)
  
  //считаем приход денег
  const income = transactions
    .filter((item:Trans) => item.amount > 0)
    .reduce((acum:number,item:Trans) =>acum + +item.amount,0)

  //считаем расходы
  const expense = transactions
    .filter((item:Trans) => item.amount < 0)
    .reduce((acum:number,item:Trans) =>acum + +item.amount,0)

  
  
  return (
    <div className="header">
      <h1 className="title">
        Expense Tracker
      </h1>
      <div className="balance">
        <p className="balance-text">Your balance</p>
        <p className="balance-sum">{total}$</p>
      </div>
      <div className="income-expense">
        <div className="income">
          <p className="income-text">income</p>
          <p className="income-sum">${income}</p>
        </div>
        <div className="border"></div>
        <div className="expense">
        <p className="expense-text">expense</p>
          <p className="expense-sum">${Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
