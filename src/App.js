import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'

import Login from './components/login'
import Auth from './components/auth'
import Projects from './components/projects'
import ProjectDetail from './components/projectDetail'
import IssueDetails from './components/issueDetails'
import NewProject from './components/newProject'
import NewIssue from './components/newIssue'

import store from './store'


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>

          <Route exact path = '/'>
            <Container style = {{margin:20}}>
              <Login></Login>
            </Container>
          </Route>

          <Route path = '/auth' component = {Auth}/>

          <Route exact path = '/projects' component = {Projects}/>

          <Route exact path = '/projects/:id' component = {ProjectDetail}/>

          <Route exact path = '/issue/:id' component = {IssueDetails}/>

          <Route exact path = '/newproject' component = {NewProject}/>

          <Route exact path = '/projects/:id/newissue' component = {NewIssue}/>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App
