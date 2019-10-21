<template>
  <div>
    <Header :title="'我的注册'" />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-button type="info" size="large" round >提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import { Field, cellGroup, CellGroup, Uploader ,Button } from "vant";
import Header from "@/components/header";
export default {
  name: "Register",
  components: {
    "van-cell-group": CellGroup,
    "van-field": Field,
    "van-uploader": Uploader,
    "van-button" : Button 
  },
  data() {
    return {
      value: "",
      username: "",
      password: ""
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style lang="stylus" scoped></style>