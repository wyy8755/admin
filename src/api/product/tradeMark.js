import request from "@/utils/request";
//  /admin/product/baseTrademark/{page}/{limit}  get
export const tradeMarkList = (page,limit)=>request.get(`admin/product/baseTrademark/${page}/${limit}`)
