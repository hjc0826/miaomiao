<template>
  <div>
    <Header :title="'我的注册'" />
    <van-cell-group>
      <van-field
        v-model="userDate.name"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @blur="verifyNm"
      />
      <van-field
        v-model="userDate.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-radio-group v-model="userDate.radio">
        <van-radio name="man">男</van-radio>
        <van-radio name="women">女</van-radio>
      </van-radio-group>
      <!-- disabled属于绑定在input上的  -->
      <van-button type="info" size="large" round @click="submitInfo" :disabled="isclick">提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import {
  Field,
  cellGroup,
  CellGroup,
  Uploader,
  Button,
  RadioGroup,
  Radio,
  Notify
} from "vant";
import Header from "@/components/header";
export default {
  name: "Register",
  components: {
    "van-cell-group": CellGroup,
    "van-field": Field,
    "van-uploader": Uploader,
    "van-button": Button,
    "van-radio-group": RadioGroup,
    "van-radio": Radio,
    Notify,
    Header
  },
  data() {
    return {
      userDate: {
        name: "",
        password: "",
        radio: "man"
      },
      isclick: true
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 提交保存用户数据到数据库
    submitInfo() {
      this.$axios
        .post("http://127.0.0.1:3000/api2/user/register", {
          name: this.userDate.name,
          sex: this.userDate.radio,
          password: this.userDate.password
        })
        .then(response => {
          if (response.data.msg == "ok") {
            console.log("success"); 
            const user = {
              name : this.userDate.name,
              sex  : this.userDate.radio
            }
            // 将用户信息存入sessionstorge中
            sessionStorage.setItem("user",JSON.stringify(user));
            // error xxxxxxxxxxxxxxxxx
            this.$router.replace("/mine/loginout");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 验证重名用户
    verifyNm() {
      console.log("失去焦点");
      if (this.userDate.name == "") {
        this.$notify({
          type: "primary",
          message: "不能为空"
        });
        return;
      }
      this.$axios
        .get("http://127.0.0.1:3000/api2/user/verifyNm", {
          params: {
            name: this.userDate.name
          }
        })
        .then(res => {
          if (res.data.status == -1) {
            this.$notify({
              type: "success",
              message: "可以使用这个名字",
              duration: 2000
            });
          } else {
            this.$notify({
              type: "warning",
              message: "用户重名了",
              duration: 2000
            });
            this.userDate.name = "";
          }
        });
    }
  },
  watch: {
    userDate: {
      handler(cur, old) {
        for (let i in cur) {
          if (!cur[i]) {
            this.isclick = true
            break
          }
          this.isclick = false
        }

      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-radio-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.van-radio {
  padding: 15px 30px;
}
</style>