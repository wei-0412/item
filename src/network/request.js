import axios from "axios"



// 可以创建多个网络请求
export function request(config) {

  //1.创建axios的实例，可以创建多个实例
  const instance = axios.create({
    baseURL: "http://www.liulongbin.top:3005/",
  })

  // 2.axios拦截器(请求拦截)
  instance.interceptors.request.use( config => {
    // console.log(config);
    return config
  },err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res.data);
    // 响应的成功拦截中，主要是对数据进行过滤data
    return res.data
  },err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance (config)

}

