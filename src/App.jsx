import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Main from './pages/Main/Main';
import Country from './pages/Country/Country';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Container>
      <Row className="container__header">
        <Header />
      </Row>
      <Row className="container__main">
        <main className="main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Country" component={Country} />
          </Switch>
        </main>
      </Row>
      <Row className="container__footer">
        <Footer />
      </Row>
    </Container>
  );
};

export default App;
