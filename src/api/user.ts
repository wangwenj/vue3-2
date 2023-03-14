import http from '@/utils/http'

export interface LoginParams {
  username: string
  password: string
}

const userApi = {
  login(params: LoginParams) {
    return http.post('/login', params)
  },
  userInfo() {
    return http.get<string>('/userInfo')
  },
}

export default userApi
