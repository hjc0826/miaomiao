<template>
  <div>
    <div class="login_body">
      <div>
        <input type="text" placeholder="账户名/手机号/Email" class="login_text" />
      </div>
      <div>
        <input type="password" name id class="login_text" placeholder="请输入您的密码" />
      </div>
      <div class="login_btn">
        <input type="submit" value="登陆" />
      </div>
      <div class="login_link">
        <router-link to="/mine/register">立即注册</router-link>
        <router-link to="/mine/findPassword">找回密码</router-link>
      </div>
    </div>  
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabbar from "@/components/tabBar";
export default {
  name: "Login",
  components: {
    Header,
    Tabbar
  }
};
</script>

<style scoped>
.login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: #fff;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>