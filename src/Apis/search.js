import request from "@/utils/request";

// 搜索结果列表
export const searchResult = (params) =>
  request({
    url: "/search/hot",
    params,
  });

  export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  });