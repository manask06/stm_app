import React from 'react';
import './Dashboard.scss'
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Resume from '../resume/ResumeView'

const JOB_DESCRIPTIONS = ["JOb dec1", 'JOb dec 2', 'Job desc 3', 'Job desc 4']
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 }
]
function Dashboard() {

  return (
    <div className="container">
      <h3>Evaluate</h3>
      <div className="Dashboard_container">
        <Paper classes={{root: 'Dashboard_container-jobdesc'}}>
          <h5>Job Descriptions</h5>
          <Autocomplete
            id="select-field"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Select Job Description" variant="outlined" />}
          />
        </Paper>
        <Paper classes={{root: 'Dashboard_container-resumes'}}>
            <h5 className="Dashboard_resume-h5">Resumes</h5>
            <div className="Dashboard_resume-container">
              <Resume/>
            </div>
        </Paper>
      </div>
    </div>
  )
}

export default Dashboard;