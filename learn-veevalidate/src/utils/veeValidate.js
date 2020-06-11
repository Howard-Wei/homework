import { extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize({
  zh: {
    names: {
      username: '用户名',
      password: '密码',
      validatecode: '验证码'
    },
    messages: {
      required: '{_field_}不能为空',
      email: '请输入正确的邮箱格式',
      min: '{_field_}不能少于{length}个字符',
      length: '{_field_}长度要求为{length}个字符'
    }
  }
})

localize('zh')
