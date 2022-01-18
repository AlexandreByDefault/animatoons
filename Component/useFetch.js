

export function fetchUrl (endpoint, token ) {
  const fetchData =  fetch(`https://api.aniapi.com/v1/${endpoint}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    return (
   fetchData
    )
}