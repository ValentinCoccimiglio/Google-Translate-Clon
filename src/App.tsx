import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Button} from 'react-bootstrap';

import './App.css'
import { useStore } from './hooks/useStore';
import {ArrowsIcon} from './components/Icons'
import { AUTO_LANGUAGE } from './constant';
import { LanguageSelector } from './components/LanguageSelector';


function App(){
  const { toLanguage, fromLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()

  return (
      <Container fluid>
        <h1>Google Translate</h1>


        <Row>
          <Col>
          <LanguageSelector
          type='from'
          value={fromLanguage}
          onChange={setFromLanguage} />
          </Col>

          <Col>
          <Button variant='link' disabled = {fromLanguage === AUTO_LANGUAGE } onClick={interchangeLanguages}>
            <ArrowsIcon />
            </Button>
            </Col>

          <Col>
          <LanguageSelector
          type = 'to'
          value = {toLanguage}
          onChange={setToLanguage}/>
          </Col>
        </Row>

      </Container>
  )
}

export default App
