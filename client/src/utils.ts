
export function fetchData(method: string = 'GET', url: string = '', data: Object = {}) {
  url = '/api' + url;
  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
