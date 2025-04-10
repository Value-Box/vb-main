import React from 'react'
import { API_ENDPOINTS } from '../config/apiEndpoints'
import { useFetch } from '../hooks/UseFetch'

function userApi() {
  return useFetch({url:API_ENDPOINTS.Login})
}

export default userApi