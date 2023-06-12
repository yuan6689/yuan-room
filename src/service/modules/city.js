import YuanRequest from "../request/index.js"

export const getCityAll = function(){
  return YuanRequest.get({
    url: "/city/all"
  })
}