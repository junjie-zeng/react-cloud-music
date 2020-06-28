import { axiosInstance } from "./config";



// 获取banan
export const getBannerRequest = () => axiosInstance.get ('/banner')

// 获取推荐列表
export const getRecommendListRequest = () => axiosInstance.get ('/personalized')

// 获取热歌列表
export const getHotSingerListRequest = (count)=>axiosInstance.get(`/top/artists?offset=${count}`)

// 获取歌曲列表
export const getSingerListRequest = (category,alpha,count)=>axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`)

// 获取详情 
export const getRankListRequest = ()=>axiosInstance.get(`/toplist/detail`)