import { useTransactions } from '../../hooks/useTransactions'

import incomeImg from '../../assets/income.svg'
import expensesImg from '../../assets/expenses.svg'
import balanceImg from '../../assets/balance.svg'

import { Container } from './styles'

export function Summary() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.transactionType === 'income') {
            acc.income += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.expenses += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        income: 0,
        expenses: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency', 
                        currency: 'USD'
                    }).format(summary.income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expensesImg} alt="Income" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('en-US', {
                        style: 'currency', 
                        currency: 'USD'
                    }).format(summary.expenses)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={balanceImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency', 
                        currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}