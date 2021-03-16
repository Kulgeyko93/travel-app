/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Main from './pages/Main/Main';
// import Country from './features/country/Country';
import Country from './pages/Country/Country';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  return (
    <>
      <Container className="container__body" fluid>
        <Row className="container__header">
          <Header />
        </Row>
        <Row className="container__main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/country" component={Country} />
          </Switch>
        </Row>
        <Row className="container__footer">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default App;
