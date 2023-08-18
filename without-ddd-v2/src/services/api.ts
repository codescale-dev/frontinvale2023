import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const post = (path: string, body: object) => {
  return api.post(path, body)
}

const get = (path: string) => {
  return api.get(path)
}

const patch = (path: string, body: object) => {
  return api.patch(path, body)
}

const put = (path: string, body: object) => {
  return api.put(path, body)
}

export { post, get, patch, put }
