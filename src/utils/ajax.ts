import axios from 'axios'

interface Params {
  params?: object;
}
type restfulMethods = 'get' | 'post' | 'delete' | 'option'

const myAxios = axios.create({
  headers: { 'Content-Type': 'application/json', 'Authorization': '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' }
})

// 針對response 處理
myAxios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error.message)
})

export default function (method: restfulMethods, url: string, data?: object): Promise<any> {
  if (method === 'get') {
    const param: Params = {}
    if (data) param.params = data
    return myAxios.get(url, param)
  } else {
    return myAxios.post(url, data) 
  }
}

export {
  Params
}
