import { OMBD_API_BASE_URL, OMBD_API_KEY } from '@env'

export const fetchData = async (uri, method = "GET", body = '{}') => {
  const response = await fetch(`${OMBD_API_BASE_URL}/${uri}&apikey=${OMBD_API_KEY}`, {
    method: method,
    body: method != "GET" ? JSON.stringify(body) : null
  })

  if (Math.floor(response.status / 100) != 2) {
    throw new Error(await response.text());
  }

  return await response.json();
}
