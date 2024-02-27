import axios, {type AxiosRequestConfig, AxiosResponse} from "axios"

// AxiosRequestConfig 请求传递参数类型
axios.defaults.baseURL = `http://localhost:3000/`

// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config)

// 响应拦截器
axios.interceptors.response.use((res: AxiosResponse) => {
  return res
}, err => {
  return Promise.reject(err)
})

interface IHttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>;
}

const http: IHttp = {
  request: (method, url, params) => 
    axios({
      method: method,
      url: url,
      data: params
    })
}

export default http