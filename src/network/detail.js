import {request} from "./request";

// 顶部的图片轮播数据
export function getDetail(iid) {
  return request({
   url: "/detail",
   params: {
     iid
   }
  })
}

export function getRecommend() {
  return request({
    url: "/recommend"
  })
}

// 商品信息数据
export class goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

// 店铺信息数据
export class shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

// 商品参数的信息数据
export class goodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}



