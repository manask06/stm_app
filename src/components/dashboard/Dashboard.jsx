import React, {useEffect, useState} from 'react';
import './Dashboard.scss'
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Resume from '../resume/ResumeView'
import {getJobDescriptions, evaluate} from '../../services/api'
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Dashboard() {

  const [jobDesc, setJobDesc] = useState([])
  console.log('TCL: : Dashboard -> jobDesc', jobDesc)
  const [resultsAnalysed, setresultsAnalysed] = useState(false)
  const [evaluatedResults, setResults] = useState(['resue 1, ', 'rewda', 'asdfasd'])

  const [resumesSlected, setResumesSlected] = useState([])
  const [jobDescSelected, setJobDescArray] = useState([])

  const selectedResume = resumes => {
    setResumesSlected(resumes)
  }
  console.log('TCL: : Dashboard -> jobDesc', jobDesc)

  useEffect(() => {
    getJobDescriptions().then(result => {
      if (result && result.data)
        setJobDesc(result.data)
    })
  }, [])

  const handleEvaluation = async () => {
    const resultsEvaluated = await evaluate({jobdescription: jobDescSelected, resumes: resumesSlected})
    if (resultsEvaluated && (resultsEvaluated.data.length !== 0)) {
      setresultsAnalysed(true)
      setResults(resultsEvaluated.data)
    }
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
              onChange={(e, option) => setJobDescArray([option.id])}
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
            <div onClick={() => setresultsAnalysed(false)} className="Dashboard_backarrow">
              <ArrowBackIosIcon/> Back
            </div>
            {evaluatedResults.map((value, i) => (
                  <List >
                    <ListItem key={`key-${i}`} classes={{root: 'listItem'}} >
                      <ListItemIcon>
                        <DescriptionIcon/>
                      </ListItemIcon>
                      <ListItemText
                        primary={value}
                      />
                    </ListItem>
                </List>
                ))}
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