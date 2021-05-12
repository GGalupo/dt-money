import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expensesImg from '../../assets/expenses.svg'

import { useTransactions } from '../../hooks/useTransactions'

import {
    Container,
    TransactionTypeContainer,
    RadioBox
} from './styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({
    isOpen, onRequestClose
}: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactionType, setTransactionType] = useState('income')
    const [categoryType, setCategoryType] = useState('')

    const { createTransaction } = useTransactions()

    async function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault()

        await createTransaction({
            title,
            amount,
            transactionType,
            categoryType
        })

        setTitle('')
        setAmount(0)
        setTransactionType('income')
        setCategoryType('')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>New Transaction</h2>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    placeholder="Value"
                    type="number"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setTransactionType('income')}
                        isActive={transactionType === 'income'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income button" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setTransactionType('expense')}
                        isActive={transactionType === 'expense'}
                        activeColor="red"
                    >
                        <img src={expensesImg} alt="Expenses button" />
                        <span>Expense</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Type"
                    value={categoryType}
                    onChange={e => setCategoryType(e.target.value)}
                />
                <button type="submit">
                    Add Transaction
                </button>
            </Container>
        </Modal>
    )
}