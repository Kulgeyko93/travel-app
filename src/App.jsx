/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Main from './pages/Main/Main';
import Country from './pages/Country/Country';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AuthModal from './components/AuthModal';

const App = () => {
  const [authShown, setAuthShown] = useState(false);
  const openModal = () => setAuthShown(true);
  const closeModal = () => setAuthShown(false);

  return (
    <>
      <Header openModal={openModal} />
      <Container className="container__body" fluid>
        <Row className="container__main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/country/:name" component={Country} />
          </Switch>
        </Row>
        <Row className="container__footer">
          <Footer />
        </Row>
        <AuthModal show={authShown} closeModal={closeModal} />
      </Container>
    </>
  );
};

export default App;
