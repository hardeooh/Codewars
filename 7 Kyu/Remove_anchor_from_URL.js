function removeUrlAnchor(url){
  return url.indexOf('#') !== -1 ? url.slice(0,url.indexOf('#')) : url
}