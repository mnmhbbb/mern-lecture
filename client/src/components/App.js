import React, { Suspense } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { Auth } from '../hoc/auth';
import UploadPage from '../pages/UploadPage';
import DetailPage from '../pages/DetailPage';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/upload" component={Auth(UploadPage, true)} />
        <Route exact path="/:productId" component={DetailPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
