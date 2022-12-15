import request from '../utils/axiosUtil'
class CtgyApi {
  static api = new CtgyApi()
  async getFirstCtgy() {
    return await request.get('/ctgymodule/findFirstCtgys', false)
  }
  async getSecThridCtgy(firstCtgyId: number) {
    return await request.get(`/ctgymodule/findSecThirdCtgys/${firstCtgyId}`, false)
  }
}

export default CtgyApi.api
