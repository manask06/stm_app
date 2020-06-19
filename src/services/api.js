import axios from 'axios'

const BACKEND_URL = 'http://localhost:8000/api'

export async function createJobDescription (jobDescData) {
  try {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('accessToken')}`
      }
    }
    const result = await axios.post(`${BACKEND_URL}/jobdescription/jobdescriptions/`, jobDescData, config)
    console.log('TCL: : login -> result data', result.data)
    console.log('TCL: : login -> result', result)
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function createResume (resumeData) {
  try {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('accessToken')}`
      }
    }



  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}