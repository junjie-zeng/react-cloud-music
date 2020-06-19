import { axiosInstance } from "./config";



// 获取banan
export const getBannerRequest = () => axiosInstance.get ('/banner')

// 获取推荐列表
export const getRecommendListRequest = () => axiosInstance.get ('/personalized')