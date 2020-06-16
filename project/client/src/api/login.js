import axios from '@/utils/axios'

const forgetPass = (data) => axios.post('/login/forget', data)

export {
  forgetPass
}
