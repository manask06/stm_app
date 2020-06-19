import React, {useEffect, useState} from 'react';
import './Dashboard.scss'
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Resume from '../resume/ResumeView'
import {getJobDescriptions, evaluate} from '../../services/api'
import Button from '@material-ui/core/Button';

function Dashboard() {

  const [jobDesc, setJobDesc] = useState([])
  const [resultsAnalysed, setresultsAnalysed] = useState(false)
  const selectedResume = resumes => {
    console.log('TCL: : Dashboard -> resumes', resumes)

  }
  console.log('TCL: : Dashboard -> jobDesc', jobDesc)

  useEffect(() => {
    getJobDescriptions().then(result => {
      if (result && result.data)
        setJobDesc(result.data)
    })
  }, [])

  const handleEvaluation = () => {

    // const selectedJobDesc = document.getElementById('selectJobDescription')
    evaluate({jobdescription: ['1'], resumes: ['13','14', '16']})
  }

  const renderEvaluateContainer = () => {
    return (
      <React.Fragment>
        <h3>Evaluate</h3>
        <div className="Dashboard_container">
          <Paper classes={{root: 'Dashboard_container-jobdesc'}}>
            <h5>Job Descriptions</h5>
            <Autocomplete
              id="selectJobDescription"
              options={jobDesc}
              getOptionLabel={(option) => option.name}
              onInputChange={(e, value) => console.log("=========> " ,value)}
              renderInput={(params) => <TextField {...params} label="Select Job Description" variant="outlined" />}
            />
            <div className="Dashboard_evaluate">
              <Button classes={{root: 'Dashboard_evaluate'}} onClick={handleEvaluation} variant="contained" color="primary">
                Evaluate
              </Button>
            </div>
          </Paper>
          <Paper classes={{root: 'Dashboard_container-resumes'}}>
              <h5 className="Dashboard_resume-h5">Resumes</h5>
              <div className="Dashboard_resume-container">
                <Resume onResumeSelect={selectedResume}/>
              </div>
          </Paper>
        </div>
        </React.Fragment>)
  }

  const renderAnalysedContainer = () => {
    return (
      <React.Fragment>
        <h3>Analyzed Results</h3>
        <div className="Dashboard_container">
          <Paper classes={{root: 'Dashboard_container-jobdesc'}}>
            <h5>Job Descriptions</h5>
            <Autocomplete
              id="selectJobDescription"
              options={jobDesc}
              getOptionLabel={(option) => option.name}
              onInputChange={(e, value) => console.log("=========> " ,value)}
              renderInput={(params) => <TextField {...params} label="Select Job Description" variant="outlined" />}
            />
            <div className="Dashboard_evaluate">
              <Button classes={{root: 'Dashboard_evaluate'}} onClick={handleEvaluation} variant="contained" color="primary">
                Evaluate
              </Button>
            </div>
          </Paper>
        </div>
        </React.Fragment>)
  }


  return (
    <div className="container">
      {resultsAnalysed ? renderAnalysedContainer() : renderEvaluateContainer()}
    </div>
  )
}

export default Dashboard;