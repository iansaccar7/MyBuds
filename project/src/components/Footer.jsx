import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark py-5" style={{ backgroundColor: 'var(--darker) !important' }}>
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ 
              fontWeight: '700',
              background: 'linear-gradient(145deg, #00ff9d, #006B3C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              MyBuds
            </h5>
            <p className="text-muted">
              AVISO: Este é um site fictício inspirado pela série "How to Sell Drugs Online (Fast)". 
              Não vendemos cannabis ou produtos relacionados. Todo o conteúdo é puramente para fins educacionais e de entretenimento.
            </p>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase mb-4 neon-text">Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-muted">Início</Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog" className="text-muted">Produtos</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted">Sobre</Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted">Carrinho</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase mb-4 neon-text">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-muted">Termos</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted">Privacidade</Link>
              </li>
              <li>
                <Link to="#" className="text-muted">Cookies</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6}>
            <h6 className="text-uppercase mb-4 neon-text">Redes Sociais</h6>
            <div className="d-flex">
              <a href="#" className="me-3 text-muted">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="me-3 text-muted">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-muted">
                <FaGithub size={24} />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" style={{ backgroundColor: 'var(--border-color)', opacity: 0.1 }} />
        
        <Row>
          <Col className="text-center text-muted">
            <small>
              &copy; {currentYear} MyBuds. Todos os direitos reservados. Projeto fictício.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer