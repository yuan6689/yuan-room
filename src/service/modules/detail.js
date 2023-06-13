import YuanRequest from "../request/index"

export function getDetailInfos(houseId) {
  return YuanRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}