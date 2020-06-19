import React, {useState} from 'react';
import './JobDescription.scss'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {createJobDescription} from '../../services/api'

function JobDescription() {

  const [jobListPresent, listStatus] = useState(false)

  const handleSubmit = () => {

    const obj = {
      name: document.getElementById('jobDescName').value,
      data: document.getElementById('descriptionData').value,
    }
    createJobDescription(obj)
  }

  return (
    <div className="container">
      <h3>Job Description</h3>
      <div className="job-container">
          {
            jobListPresent ? (
              <Paper classes={{root: 'paper'}}>
              </Paper>
            ) : (<img width="400" height="300" alt="job-list" src={ require('../../todolist.svg') } />)
          }
        <Paper classes={{root: 'paper'}}>
          <h4>New Job Description</h4>
          <form  className="form">
            <input type="text" id="jobDescName" name="firstname" placeholder="Name" />
            <textarea rows="4" id="descriptionData" name="description" placeholder="Job description........" />
            <Button onClick={handleSubmit} classes={{root: 'formButton'}} variant="contained" color="primary">
              Add Job Description
            </Button>
          </form>
          <br/>
          <div className="or">OR</div>
          <div className="upload">
            <Button classes={{root: 'uploadButton'}} variant="contained" color="primary">
              Upload
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default JobDescription;