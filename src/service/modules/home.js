import YuanRequest from "../request/index.js"

export function getHomeHotSuggests() {
  return YuanRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

export function getHomeCategories() {
  return YuanRequest.get({
    url: "/home/categories"
  })
}