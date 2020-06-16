import axios from '@/utils/axios'

const getCaptcha = async () => axios.post('/common/getCaptcha')

export {
  getCaptcha
}
