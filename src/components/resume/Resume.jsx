import React, {useState} from 'react';
import './Resume.scss'
import PropTypes from 'prop-types'
import ResumeView from './ResumeView'
import Paper from '@material-ui/core/Paper';

const RESUMES = ['resume 1', 'resume 2', 'resume 3', 'resume 4']

function Resume({page, onResumeSelect}) {
  return (
    <div className="container">
      {page !== 'index' && <h3>Resume</h3> }
      <div className="resumeContainer">
      <Paper classes={{root: 'Resume_paper'}}>
        <ResumeView onResumeSelect={onResumeSelect} />
      </Paper>
      </div>
    </div>
  )
}

Resume.propTypes = {
  page: PropTypes.string,
  onResumeSelect: PropTypes.func
}

export default Resume;