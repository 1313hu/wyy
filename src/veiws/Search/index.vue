<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <van-cell title="热门搜索" />
    <div style="padding: 10px 16px">
      <van-tag
        color="#ccc"
        text-color="#000"
        size="large"
        plain
        round
        type="primary"
        v-for="(item, index) in hotList"
        :key="index"
        style="margin-right: 6px"
        @click="clickFn(item.first)"
      >
        {{ item.first }}
      </van-tag>
    </div>

    <van-cell title="最佳匹配" />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in serachList" :key="item.id" :title="item.name" />
    </van-list>
  </div>
</template>
<script>
import { searchResultApi, getSearchListApi } from "@/Apis";
export default {
  data() {
    return {
      hotList: [],
      value: "",
      serachList: [],
      loading: false,
      finished: true,
    };
  },
  created() {
    this.getHotList();
  },
  methods: {
    async getHotList() {
      try {
        const res = await searchResultApi();
        this.hotList = res.data.result.hots;
        console.log(res.data.result);
      } catch (err) {
        console.log(err);
      }
    },
    async clickFn(val) {
      this.value = val;
      const res = await getSearchListApi({
        keywords: this.value,
      });
      this.serachList = res.data.result.songs;
      this.$toast.success("成功文案")
    }, catch (e) {
        this.$toast.fail("失败文案")
    },
    onLoad(){

    }
  },
};
</script>
