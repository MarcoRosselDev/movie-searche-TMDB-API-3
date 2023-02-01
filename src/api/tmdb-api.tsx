import axios, { AxiosResponse } from 'axios'
import { Film } from '../interfaces'
import { MediaType } from '../types'
import { formatResult } from '../utils'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_URL,
})

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
    },
  }
})

export const getTrendings = async (mediaType: MediaType): Promise<Film[]> => {
  try {
    const { data } = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`/trending/${mediaType}/week`)

    return data.results.map((val) => formatResult(mediaType, val))
  } catch (error) {
    console.log(error)
  }
  return []
}

export const getTheaser = async (): Promise<Film[]> => {
  try {
    const { data } = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`/movie/now_playing`)

    return data.results.map((val) => formatResult('movie', val))
  } catch (error) {
    console.log(error)
  }
  return []
}