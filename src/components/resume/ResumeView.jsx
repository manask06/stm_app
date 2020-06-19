import React, {useState} from 'react';
import './Resume.scss'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Dropzone from 'react-dropzone'

const RESUMES = ['resume 1', 'resume 2', 'resume 3', 'resume 4']

function ResumeView({page}) {
  const [resumesPresent, setResumesStatus] = useState(true)
  const [dense, setDense] = useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [files, setFile] = useState([])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log('TCL: : handleToggle -> newChecked', newChecked)
  };

  const handleUpload = () => {

  }


  const renderContainer = () => {

    return (
      <React.Fragment>
        {page === 'index' && <h3>Resumes</h3> }
        <div className="resumes">
          {
            resumesPresent ? (
              <div className="resumeList">
                {RESUMES.map(resume => (
                  <List dense={dense}>
                    <ListItem key={resume} classes={{root: 'listItem'}} onClick={handleToggle(resume)}>
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
                        primary={resume}
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
}

export default ResumeView;