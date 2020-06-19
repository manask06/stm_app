import React, {useState, useEffect} from 'react';
import './Resume.scss'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Dropzone from 'react-dropzone'
import {createResume, getResumes} from '../../services/api'
const RESUMES = ['resume 1', 'resume 2', 'resume 3', 'resume 4']

function ResumeView({page, onResumeSelect}) {
  const [resumesPresent, setResumesStatus] = useState(false)
  const [dense, setDense] = useState(false);
  const [checked, setChecked] = React.useState([0]);
  console.log('TCL: : ResumeView -> checked', checked)
  const [files, setFile] = useState([])
  const [resumes, setResumes] = useState([])

  const [resumeCreated, setResumeCreated] = useState(false)

  useEffect(() => {
    getResumes().then(resumeList => {
      if (resumeList && resumeList.data)
        setResumes(resumeList.data)
        setResumesStatus(true)
    })
  }, [])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    const selectedCheck = newChecked.map(value => (value !== 0) && value.id).filter(Boolean)
    onResumeSelect(selectedCheck)
  };

  const handleUpload = async e => {
    e.preventDefault()
    files.map(async file => {
      await createResume(file)
      getResumes().then(resumeList => {
        if (resumeList && resumeList.data)
          setResumes(resumeList.data)
          setResumesStatus(true)
      })
    })
    setFile([])
  }


  const renderContainer = () => {

    return (
      <React.Fragment>
        {page === 'index' && <h3>Resumes</h3> }
        <div className="resumes">
          {
            resumesPresent ? (
              <div className="resumeList">
                {resumes.map(resume => (
                  <List dense={dense}>
                    <ListItem key={resume.id} classes={{root: 'listItem'}} onClick={handleToggle(resume)}>
                      <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(resume) !== -1}
                        tabIndex={-1}
                        color="default"
                        disableRipple
                      />
                      </ListItemIcon>
                      <ListItemText
                        primary={resume.name}
                      />
                    </ListItem>
                </List>
                ))}
              </div>
            ) : (
              <img  alt="job-list" src={ require('../../resumes.svg') } />
            )
          }
        </div>
        <div className="Resume_upload">
          <h4>Upload Resumes</h4>
          <div>
            <Dropzone onDrop={files => setFile(files)}>
              {({getRootProps, getInputProps}) => (
                <section className="dropzone_container">
                  <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
          </Dropzone>
          <Button classes={{root: 'Resume_uploadButton'}} onClick={handleUpload} variant="contained" color="primary">
            Upload
          </Button>
          </div>
          <div className="resume_upload-list">
              {
                files.map(file => <p>{file.name}</p>)
              }
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>{renderContainer()}</React.Fragment>
  )
}

ResumeView.propTypes = {
  page: PropTypes.string,
  onResumeSelect: PropTypes.func
}

export default ResumeView;