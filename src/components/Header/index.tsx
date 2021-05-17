import logoImg from '../../assets/logo.png'

import { Container, Content, LogoContainer } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <LogoContainer>
                    <img src={logoImg} alt="logo dt money" />
                    <span>gg money</span>
                </LogoContainer>
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}