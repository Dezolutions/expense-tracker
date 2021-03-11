import '../css/history.css'
import {useSelector} from 'react-redux'
import { deleteTransaction } from '../redux/action'
import {useDispatch} from 'react-redux'
import Transaction from './Transaction'
import {Trans, TransObj} from '../types/types'


function History() {
  const dispatch = useDispatch();
  const transactions = useSelector((reducer:TransObj)=>reducer.transactions)
  const filterArr = transactions.filter((item:Trans) => item.completed)
  
  //удаляем все выбранные предметы
  const onDeleteTransaction = () => {
    if(filterArr.length !== 0){
      dispatch(deleteTransaction(filterArr))
    }
  }

  return (
    <div className="history">
      <div className="history-title__block">
        <p className="history-title">History</p>
        <p className="history-choosing">selected(<b>{filterArr.length}</b>)</p>
        <button onClick={onDeleteTransaction} className="history-delete">delete</button>
        </div>
      <ul className="history-block">
        {transactions 
          &&transactions.map((transaction:any) =>(
          <Transaction key={transaction.id} {...transaction}/>
        ))}
      </ul>
    </div>
  )
}

export default History
