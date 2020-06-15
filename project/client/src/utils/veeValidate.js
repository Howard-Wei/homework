import { localize, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize({
  zh: {
    names: {
      username: '用户名',
      password: '密码',
      vercode: '验证码',
      repasswrod: '密码',
      nickname: '昵称'
    },
    messages: {
      required: '请输入{_field_}',
      email: '请输入正确的邮箱格式',
      min: '{_field_}最小长度为{length}',
      max: '{_field_}最大长度为{length}',
      length: '{_field_}长度要求为{length}个字符',
      confirmed: '与{_field_}填写不一致'
    }
  }
})

localize('zh')
