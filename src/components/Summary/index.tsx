import { useContext } from 'react'

import incomeImg from '../../assets/income.svg'
import expensesImg from '../../assets/expenses.svg'
import balanceImg from '../../assets/balance.svg'

import { Container } from './styles'

import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expensesImg} alt="Income" />
                </header>
                <strong>-$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={balanceImg} alt="Income" />
                </header>
                <strong>$500,00</strong>
            </div>
        </Container>
    )
}