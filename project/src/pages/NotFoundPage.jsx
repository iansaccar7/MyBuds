import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFoundPage() {
  return (
    <section className="py-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container className="py-5 text-center">
        <Row className="justify-content-center">
          <Col lg={6}>
            <h1 
              className="display-1 fw-bold mb-4"
              style={{ 
                background: 'linear-gradient(145deg, #00d4ff, #8000ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              404
            </h1>
            <h2 className="mb-4">Página Não Encontrada</h2>
            <p className="lead text-muted mb-5">
              Ops! Parece que você tentou acessar uma página que não existe ou foi movida.
            </p>
            <Button 
              as={Link} 
              to="/"
              size="lg"
              className="btn-primary px-4"
            >
              <FaHome className="me-2" /> Voltar para Início
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NotFoundPage