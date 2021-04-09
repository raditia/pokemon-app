export const decodeQueryParams = (url) => {
  const [path, params] = url.split('?')
  return JSON.parse('{"' + decodeURI(params)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g,'":"') + '"}')
}
