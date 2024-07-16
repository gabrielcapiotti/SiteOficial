import Conteudo, { BoxCarrossel } from "./MainStyled";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Boxing, ButtomMenuSecondary } from "../components/MenuEstrutura/MenuSecundário";
import ImageCarousel from "../components/MenuEstrutura/Carrossel";


function Menu() {
    return (
        <Conteudo>
            <Container>
                <Row>
                    <Col>
                        <Boxing>
                            <p style={{ width: '196px', backgroundColor: '#462863', margin: '2px 2px 2px 2px', }}>Vistos Recentemente</p>
                            <ButtomMenuSecondary to="/home/subpage1">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage2">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage3">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage4">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                            <p style={{ width: '196px', backgroundColor: '#462863', margin: '2px 2px 2px 2px' }}>Seus Marcadores</p>
                            <ButtomMenuSecondary to="/home/subpage1">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage2">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage3">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage4">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                            <p style={{ width: '196px', backgroundColor: '#462863', margin: '2px 2px 2px 2px' }}>Recomendados</p>
                            <ButtomMenuSecondary to="/home/subpage1">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage2">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage3">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage4">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                            <ButtomMenuSecondary to="/home/subpage5">????</ButtomMenuSecondary>
                        </Boxing>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <ImageCarousel />
                    </Col>
                </Row>
            </Container>
        </Conteudo>
    );
}

export default Menu;