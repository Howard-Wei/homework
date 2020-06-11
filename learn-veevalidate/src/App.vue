<template>
  <div class="login-page">
    <form
      class="layui-form layui-form-pane"
      action=""
    >
      <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        rules="required|email"
      >
        <div :class="['layui-form-item', {'no-margin': errors[0]}]">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
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
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        rules="required|min:4"
      >
        <div :class="['layui-form-item', {'no-margin': errors[0]}]">
          <label class="layui-form-label">密 码</label>
          <div class="layui-input-block">
            <input
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
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        rules="required|length:4"
      >
        <div :class="['layui-form-item', {'no-margin': errors[0]}]">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input
              v-model="code"
              type="text"
              name="validatecode"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            >
          </div>
          <div
            class="captcha-code-area"
            @click.stop="getCaptcha"
            v-html="captcha"
          />
          <div
            v-show="errors[0]"
            class="error"
          >
            {{ errors[0] }}
          </div>
        </div>
      </ValidationProvider>
      <button
        type="button"
        class="layui-btn layui-btn-normal"
      >
        登陆
      </button>
      <a
        class="forget-btn"
        href="javascript:void(0)"
      >忘记密码</a>
    </form>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      captcha: '',
      code: '',
      username: '',
      password: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha () {
      try {
        const result = await axios.get('/login/getCaptcha')
        if (result.data && result.data.code === 1) {
          this.captcha = result.data.data
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  padding: 10px;
  * {
    box-sizing: border-box;
  }
  .layui-form-pane {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    .layui-form-item {
      margin-bottom: 26px;
      position: relative;
      &.no-margin {
        margin-bottom: 0;
      }
    }
    input {
      width: 180px;
    }
    .captcha-code-area {
      padding: 0 !important;
      position: absolute;
      left: 290px;
      top: -15px;
    }
    .forget-btn {
      padding-left: 10px;
      &:hover {
        color: #0094fa;
      }
    }
    .error {
      color: red;
      padding: 5px 10px;
      height: 26px;
    }
  }
}
</style>

<style>
html, body {
  width: 100%;
  height: 100%;
  background-color: #ddd;
}
</style>
