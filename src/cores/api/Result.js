import { default as _ } from 'lodash'

const Results = [
  {
    code: 200,
    status: 'completed',
    result: {}
  },
  {
    code: 401,
    status: 'error',
    message: 'Unauthorized'
  },
  { 
    code: 500, 
    status: 'error',
    message: {
      en_US: 'Internal Error!',
      th_TH: 'เกิดข้อผิดพลาดภายในระบบ!'
    }
  },
  { 
    code: 530, 
    status: 'error',
    message: {
      en_US: 'Invalid parameters!',
      th_TH: 'ค่าที่ส่งไม่ถูกต้อง!'
    }
  }
]

export const Message = (code) => {
  let result = _.find(Results, (data) => {
    return data.code === code
  })
  return result
}