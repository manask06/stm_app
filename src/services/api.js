import axiosInstance from './axiosInstance'

const BACKEND_URL = 'http://localhost:8000/api'

export async function createJobDescription (jobDescData) {
  try {
    const result = await axiosInstance.post(`/jobdescription/jobdescriptions/`, jobDescData)
    console.log('TCL: : login -> result data', result.data)
    console.log('TCL: : login -> result', result)
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function createResume (file) {
  try {

    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }

    // const data = {name: file.name, data: file}
    const formData = new FormData();
    formData.append("data", file);
    formData.append("name", file.name);
    const result = await axiosInstance.post(`/resume/resumes/`, formData, config)
    console.log('TCL: : createResume -> result', result)
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function getResumes() {
  try {
    const result = await axiosInstance.get(`/resume/resumes/`)
    return result
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function getJobDescriptions() {
  try {
    const result = await axiosInstance.get(`/jobdescription/jobdescriptions/`)
    console.log('TCL: : getJobDescriptions -> result', result)
    return result
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function evaluate(evalData) {
  console.log('TCL: : evaluate -> evalData', evalData)
  try {
    const result = await axiosInstance.post(`/evaluate/evaluate`, evalData)
    console.log('TCL: : evaluate -> result', result)
  } catch (error) {
    console.log('TCL: : evaluate -> error', error)
  }
}