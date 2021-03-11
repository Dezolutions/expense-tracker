import React from 'react'
import '../css/transaction.css'
import {addTransaction} from '../redux/action'
import {useDispatch} from 'react-redux'

function AddTransaction() {
  const dispatch = useDispatch()
  const [text, setText] = React.useState('')
  const [amount, setAmount] = React.useState('')

  const onTextChange = (e :React.FormEvent<HTMLInputElement>):void => {
    setText((e.target as HTMLFormElement).value)
  }
  const onAmounChange = (e :React.FormEvent<HTMLInputElement>):void => {
    setAmount((e.target as HTMLFormElement).value)
  }
  const onAddTransaction = () => {
    if(text && amount){
      dispatch(addTransaction({
        id:Date.now(),
        text,
        amount,
        completed: false
      }))
    }
    setText('');
    setAmount('');
  }
  return (
    <div className="transaction">
      <div className="history-title__block">Add new transaction</div>
      <div className="transaction-block">
        <p className="input-title">Text</p>
        <input className="transaction-input" value={text} onChange={onTextChange} placeholder="Enter text..." type="text" required/>
        <p className="input-title">Amount(negative - expense, positive - income)</p>
        <input className="transaction-input" value={amount} onChange={onAmounChange} placeholder="Enter amount..." type="number" required/>
        <button onClick={onAddTransaction} id="transaction-btn">Add transaction</button> 
      </div>
      
      
    </div>
  )
}

export default AddTransaction
