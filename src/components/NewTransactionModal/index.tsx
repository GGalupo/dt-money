import { useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expensesImg from '../../assets/expenses.svg'

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
    const [type, setType] = useState('income')

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
            <Container>
                <h2>New Transaction</h2>
                <input
                    placeholder="Title"
                />
                <input
                    placeholder="Value"
                    type="number"
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income button" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('expense')}
                        isActive={type === 'expense'}
                        activeColor="red"
                    >
                        <img src={expensesImg} alt="Expenses button" />
                        <span>Expense</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Type"
                />
                <button type="submit">
                    Add Transaction
                </button>
            </Container>
        </Modal>
    )
}