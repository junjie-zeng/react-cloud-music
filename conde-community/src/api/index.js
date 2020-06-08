import ajax from './ajax'

// url
let _URL = 'https://cnodejs.org/api/v1'

// 获取所有主题
export const getTopics = ()=> ajax(`${_URL}/topics`)