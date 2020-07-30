import {request} from "./request";

// 轮播图
export function homeBanner() {
  return request({
    url: "/home/multidata"
  })
}