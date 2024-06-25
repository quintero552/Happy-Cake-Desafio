import Navigator from '../components/Navigator'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <div>
      <Navigator />
      <Container fluid="md" className='text-center' style={{marginTop: '30px'}}>
        <Row>
          <Col><h1>Bienvenido a <strong>Happy Cake</strong></h1></Col>
          <p>El lugar de los pasteles felices</p>
          <h1 style={{fontSize: '75px'}}>🎂</h1>
        </Row>
      </Container>
    </div>
  );
};

export default Home
