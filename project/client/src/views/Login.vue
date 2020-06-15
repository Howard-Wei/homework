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
          <li class="layui-this">
            登入
          </li>
          <li>
            <router-link :to="{name: 'Register'}">
              注册
            </router-link>
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
                <validation-provider
                  v-slot="{ errors }"
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
                    <div
                      v-show="errors[0]"
                      class="error"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required|min:6|max:16"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="passowrd"
                      class="layui-form-label"
                    >密码</label>
                    <div class="layui-input-inline">
                      <input
                        id="passowrd"
                        v-model="password"
                        type="password"
                        name="password"
                        placeholder="请输入密码"
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
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required|length:4"
                >
                  <div :class="['layui-form-item', {'no-margin': errors[0]}]">
                    <label
                      for="L_vercode"
                      class="layui-form-label"
                    >验证码</label>
                    <div class="layui-input-inline">
                      <input
                        id="L_vercode"
                        v-model="vercode"
                        type="text"
                        name="vercode"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div
                      class="layui-form-mid vercode"
                      @click="getCaptcha"
                    >
                      <span
                        style="color: #c00;"
                        v-html="svg"
                      />
                    </div>
                  </div>
                  <div
                    v-show="errors[0]"
                    class="error"
                  >
                    {{ errors[0] }}
                  </div>
                </validation-provider>
                <div class="layui-form-item">
                  <button
                    class="layui-btn"
                    lay-filter="*"
                    lay-submit
                  >
                    立即登录
                  </button>
                  <span style="padding-left:20px;">
                    <router-link :to="{name: 'Forget'}">忘记密码？</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
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
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      password: '',
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
