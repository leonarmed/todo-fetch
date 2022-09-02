export async function request({
    url,
    method,
    body
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    const configFetch = {
      method,
      headers,
      body
    };

    const res = await fetch(url,configFetch)
    .then(response => response.json())
    .then(response => {
        return(response)
    })
    .catch(err => new Error(err))

    return res
  }