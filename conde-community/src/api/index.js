import ajax from './ajax'

// url
let _URL = 'https://cnodejs.org/api/v1'

// 获取所有主题
export const reqTopics = ({page,limit})=> ajax(`${_URL}/topics`,{page,limit})

// 获取主题详情
export const reqTopicDetail = (id) => ajax(`${_URL}/topic/${id}`)