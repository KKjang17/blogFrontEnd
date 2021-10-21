import React from 'react'
import './App.css';

import AboutMe from './pages/AboutMe'
import Courses from './pages/Courses';
import MyWriting from './pages/MyWriting';

import Layout from './components/Layout';
import {
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Layout>    
        <Switch>
          <Route path="/my-writing">
            <MyWriting />
          </Route>
          <Route path="/courses">
              <Courses />
          </Route>
          <Route path="/">
              <AboutMe />
          </Route>
        </Switch>
      </Layout>
    </div>
    
  )
}

export default App;
