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
            找回密码<!--重置密码-->
          </li>
        </ul>
        <div
          id="LAY_ucm"
          class="layui-form layui-tab-content"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <!-- 重置密码 -->
            <!--
          <div class="fly-msg">{{d.username}}，请重置您的密码</div>
          <div class="layui-form layui-form-pane"  style="margin-top: 30px;">
            <form action="/user/repass" method="post">
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid layui-word-aux">6到16个字符</div>
              </div>
              <div class="layui-form-item">
                <label for="L_repass" class="layui-form-label">确认密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_repass" name="repass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <div class="layui-input-inline">
                  <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00;">{{d.vercode}}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <input type="hidden" name="username" value="{{d.username}}">
                <input type="hidden" name="email" value="{{d.email}}">
                <button class="layui-btn" alert="1" lay-filter="*" lay-submit>提交</button>
              </div>
            </form>
          </div>

          <div class="fly-error">该重置密码链接已失效，请重新校验您的信息</div>
          <div class="fly-error">非法链接，请重新校验您的信息</div>
          -->

            <div class="layui-form layui-form-pane">
              <validation-provider
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
                  <div
                    v-show="errors[0]"
                    class="error"
                  >
                    {{ errors[0] }}
                  </div>
                </div>
              </validation-provider>
              <validation-provider
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
                  <div
                    v-show="errors[0]"
                    class="error"
                  >
                    {{ errors[0] }}
                  </div>
                </div>
              </validation-provider>
              <div class="layui-form-item">
                <button
                  class="layui-btn"
                  lay-filter="*"
                  @click="submit"
                >
                  提交
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha } from '@/api/common'
import { forgetPass } from '@/api/login'
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
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
    },
    async submit () {
      const response = await forgetPass({
        user: this.username,
        vercode: this.vercode
      })
      if (response.status === 200 && response.data.code === 1) {
        alert(response.data.msg)
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
