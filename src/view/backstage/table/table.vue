<template>
  <div class="table-main">
    <div class="son">cscsfsdfs</div>
  </div>
</template>

<script>
  export default {
    name: "tableIndex",
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .table-main {
    width: 50%;
    height: 50%;
    border: 2px solid black;
    /*position: relative;*/
    /*background: cyan;*/
    display: table;
    /*.son{*/
      /*position: absolute;*/
      /*width: 50px;*/
      /*height: 50px;*/
      /*background: #66ccee;*/
      /*margin: auto;*/
      /*left: 0;*/
      /*right: 0;*/
      /*top: 0;*/
      /*bottom: 0;*/
    /*}*/
    .son{
      width: 20%;
      height: 20%;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      /*left: 50%;*/
      /*top: 50%;*/
      /*position: absolute;*/
      background: #003da8;
      /*transform: translate(-50%,-50%);*/
    }

  }
</style>
