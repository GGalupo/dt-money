import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'

import { Container } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({
    isOpen, onRequestClose
}: NewTransactionModalProps) {
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