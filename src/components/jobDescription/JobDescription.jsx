import React, {useState, useEffect} from 'react';
import './JobDescription.scss'
import Paper from '@material-ui/core/Paper';
import {createJobDescription} from '../../services/api'
import {getJobDescriptions} from '../../services/api'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
function JobDescription() {
  const [dense, setDense] = useState(false);

  const [jobListPresent, listStatus] = useState(false)
  const [jobDesc, setJobDesc] = useState([])

  useEffect(() => {
    getJobDescriptions().then(result => {
      if (result && result.data) {
        setJobDesc(result.data)
        listStatus(true)
      }
    })
  }, [])

  const handleSubmit = async () => {

    const obj = {
      name: document.getElementById('jobDescName').value,
      data: document.getElementById('descriptionData').value,
    }
    await createJobDescription(obj)
    getJobDescriptions().then(result => {
      if (result && result.data) {
        setJobDesc(result.data)
        listStatus(true)
      }
    })
  }

  return (
    <div className="container">
      <h3>Job Description</h3>
      <div className="job-container">
          {
            jobListPresent ? (
              <Paper classes={{root: 'paper'}}>
                {jobDesc.map(resume => (
                  <List dense={dense}>
                    <ListItem key={resume.id} classes={{root: 'listItem'}}>
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText
                        primary={resume.name}
                      />
                    </ListItem>
                </List>
                ))}
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