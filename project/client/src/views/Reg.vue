<template>
  <div class="layui-container fly-marginTop">
    <div
      class="fly-panel fly-panel-user"
      pad20
    >
      <div
        class="layui-tab layui-tab-brief"
        lay-filter="user"
      >
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'Login'}">
              登入
            </router-link>
          </li>
          <li class="layui-this">
            注册
          </li>
        </ul>
        <div
          id="LAY_ucm"
          class="layui-form layui-tab-content"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|email"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="username"
                      class="layui-form-label"
                    >用户名</label>
                    <div class="layui-input-inline">
                      <input
                        id="username"
                        v-model="username"
                        type="text"
                        name="username"
                        placeholder="请输入用户名"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div class="layui-form-mid layui-word-aux">
                      将会成为您唯一的登入名
                    </div>
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="nickname"
                      class="layui-form-label"
                    >昵称</label>
                    <div class="layui-input-inline">
                      <input
                        id="nickname"
                        v-model="nickname"
                        type="text"
                        name="nickname"
                        required
                        lay-verify="required"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|min:6|max:16"
                  vid="password"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="password"
                      class="layui-form-label"
                    >密码</label>
                    <div class="layui-input-inline">
                      <input
                        id="password"
                        v-model="password"
                        type="password"
                        name="password"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div class="layui-form-mid layui-word-aux">
                      6到16个字符
                    </div>
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|confirmed:password"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="repassword"
                      class="layui-form-label"
                    >确认密码</label>
                    <div class="layui-input-inline">
                      <input
                        id="repassword"
                        v-model="repassword"
                        type="password"
                        name="repasswrod"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|length:4"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="vercode"
                      class="layui-form-label"
                    >验证码</label>
                    <div class="layui-input-inline">
                      <input
                        id="vercode"
                        v-model="vercode"
                        type="text"
                        name="vercode"
                        placeholder="请填写验证码"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div class="layui-form-mid vercode">
                      <span
                        style="color: #c00;"
                        v-html="svg"
                      />
                    </div>
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
                <div class="layui-form-item">
                  <button
                    class="layui-btn"
                    lay-filter="*"
                    lay-submit
                  >
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  />
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha } from '@/api/login'
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'Register',
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      nickname: '',
      password: '',
      repassword: '',
      vercode: '',
      svg: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha () {
      const response = await getCaptcha()
      if (response.status === 200) {
        this.svg = response.data.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-form-item {
  margin-bottom: 26px;
  position: relative;
  &.no-margin {
    margin-bottom: 0;
  }
}
.error {
  float: left;
  width: 100%;
  color: red;
  padding: 5px 10px;
  height: 26px;
}
.vercode {
  padding: 0 !important;
  margin-top: -2px;
}
</style>
