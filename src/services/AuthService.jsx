import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export async function login (loginData) {
  try {
    const result = await axios.post('http://localhost:8000/api/user/token/obtain/', loginData)
    console.log('TCL: : login -> result', result.data)
    localStorage.setItem('accessToken', result.data.access)
    localStorage.setItem('refreshToken', result.data.refresh)
    window.location = `${BASE_URL}`
  } catch (error) {
    console.log('TCL: : login -> error', error)
  }
}

export async function signup (data) {
  console.log('TCL: : signup -> data', data)
  try {
    const result = await axios.post('http://localhost:8000/api/user/create/', data)
    console.log('TCL: : signup -> result', result)
    window.location = `${BASE_URL}/login`
  } catch (error) {
    console.log('TCL: : signup -> error', error)
  }
}
