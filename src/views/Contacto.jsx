import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navigator from "../components/Navigator"
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  return (
    <>
      <Navigator />
      <Container className='text-center' style={{marginTop: '30px'}}>
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="danger">Enviar</Button>
      </Container>
    </>
  );
}

export default Contacto
