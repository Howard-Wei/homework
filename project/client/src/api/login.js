import axios from '@/utils/axios'

const getCaptcha = async () => {
  return axios.post('/login/getCaptcha')
}

export {
  getCaptcha
}
