import React from 'react';
import './Sidebar.scss'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Sidebar() {

  return (
    <div className="sidebar">
      <div className='company-logo'>
        <img width="32" height="32" alt="logo" src={ require('../../logo.png') } />
        STM
      </div>
      <div className="sidebar-item">
        <Link to="/dashboard"> <HomeOutlinedIcon/>&nbsp; Dashboard</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/job"><ListAltOutlinedIcon/> &nbsp;Job Description</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/resumes"><DescriptionOutlinedIcon/>&nbsp; Resumes</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/"><CachedOutlinedIcon/>&nbsp; Evaluations</Link>
      </div>
    </div>
  )
}

export default Sidebar;