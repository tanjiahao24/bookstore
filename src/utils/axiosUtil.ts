import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'
import conf from '@/config'
import { ElMessage } from 'element-plus'

const SERVER_ERROR = '请求服务器的网址错误或网络连接失败'

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'
const methods: Method[] = ['get', 'post', 'put', 'delete', 'patch']
type ReqFn = (url: string, isMock: boolean, data?: any) => AxiosPromise<any>
interface ReqExec {
  get: ReqFn
  post: ReqFn
  put: ReqFn
  delete: ReqFn
  patch: ReqFn
}
interface AxiosRequestConfig_ extends AxiosRequestConfig {
  isMock: boolean
}

class AxiosUtil {
  static axiosUtil: AxiosUtil = new AxiosUtil()
  axiosInstance!: AxiosInstance
  request!: ReqExec
  private constructor() {
    // this.request = {
    //   get: (): any => {},
    //   post: (): any => {},
    //   put: (): any => {},
    //   delete: (): any => {},
    //   patch: (): any => {},
    // }
    this.beforeReqIntercept()
    this.beforeResponseIntercept()
    this.reqPrepare()
  }
  createAxiosInstance() {
    this.axiosInstance = axios.create({ timeout: 15000 })
  }

  beforeReqIntercept() {
    this.axiosInstance.interceptors.request.use((request) => request)
  }

  beforeResponseIntercept() {
    this.axiosInstance.interceptors.response.use((response) => {
      const { data, msg, code } = response.data
      if (code === 200) {
        return data
      } else if (code === 500) {
        ElMessage.error(`发生了错误,${msg}`)
        return
      } else {
        ElMessage.error(SERVER_ERROR)
      }
    })
  }

  sendRequest(options: AxiosRequestConfig_) {
    if (conf.env === 'production') {
      this.axiosInstance.defaults.baseURL = conf.baseApi
    } else if (conf.env === 'development') {
      const isMock: boolean = options.isMock || conf.isMock
      this.axiosInstance.defaults.baseURL = isMock ? conf.mockBaseApi : conf.baseApi
    }
    return this.axiosInstance(options)
  }

  reqPrepare() {
    methods.forEach((method) => {
      this.request[method] = (url, isMock, data) => {
        return this.sendRequest({
          method,
          url,
          data,
          isMock,
        })
      }
    })
  }
}

export default AxiosUtil.axiosUtil.request
