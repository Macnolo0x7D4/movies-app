import { fetchData } from "../clients/omdbapi"

export const getMovies = async (s) => {
  const response = await fetchData(`?s={${s}}`)
  return response.Search
}

export const getMovie = async (id) => {
  return await fetchData(`?i=${id}`)
}
