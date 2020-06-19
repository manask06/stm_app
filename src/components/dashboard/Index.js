import React from 'react';
import './Index.scss'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Dashboard from './Dashboard'
import JobDescription from '../jobDescription/JobDescription'
import Resume from '../resume/Resume'

function Index() {

  return (
      <div className="dashboard-container">
        <Sidebar/>
        <Header/>
        <div className="footer"></div>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/job' exact component={JobDescription}></Route>
            <Route path='/resumes' exact component={Resume}></Route>
            <Route path='/dashboard' exact component={Dashboard}></Route>
      </div>
  )
}

export default Index;