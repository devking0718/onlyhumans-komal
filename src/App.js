import { Button, Col, Container, Row, Nav } from 'react-bootstrap';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { FeatureCard, WorkflowCard } from './components/card';
import { FeatureCardData, WorkflowData } from './contents';
import BannerCarousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main-banner d-flex align-items-center'>
        <Container className='px-5'>
          <Row>
            <Col sm={12} md={12} className='text-center'>
              <div className="main-banner-title mb-5">Preventing Bots, Prioritizing Humans.</div>
              <div className="main-banner-content mb-5">Say goodbye to predatory bots and welcome genuine, organic growth for your token launches. With OnlyHumans, experience fair and bot-free lanches every single time.</div>
              <Nav.Link href='https://app.onlyhumans.tech/' target='_blank'><Button className='bg-white text-black rounded rounded-5 px-5 border border-0'>Integrate Onlyhumans→</Button></Nav.Link>  
            </Col>
          </Row>
        </Container>
      </section>
      <section className='feature-banner py-5'>
        <Container className='px-5'>
          <div className='section-title text-center mb-5'>Features</div>
          <Row className='d-flex flex-columne flex-lg-row feature-card-list'>
            {
              FeatureCardData.map((item, index) => (
                <Col sm={12} lg={4} className='mb-5 feature-card-list-item'>
                  <FeatureCard icon={item.icon} title={item.title} content={item.content} />
                  <hr className='mx-auto'/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className='workflow-banner py-5'>
        <Container className='px-5'>
          <div className='section-title text-center mb-5'>How It Works</div>
          <Row className='d-flex flex-columne flex-lg-row workflow-card-list'>
            {
              WorkflowData.map((item, index) => (
                <Col sm={12} lg={12} className='mb-5 workflow-card-list-item'>
                  <WorkflowCard icon={item.icon} title={item.title} content={item.content} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className=' py-5 text-center'>
        <Container className='py-5'>
          <div className='second-banner  rounded rounded-5 p-5'>
            <div className='banner-title mb-4'>Work With Us</div>
            <Nav.Link href='https://app.onlyhumans.tech/' target='_blank'><Button className='bg-white text-black rounded rounded-5 px-5 border border-0'>Integrate Onlyhumans→</Button></Nav.Link>  
          </div>
        </Container>
      </section>
      <section className='py-5'>
        <Container>
          <BannerCarousel/>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
