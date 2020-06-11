# learn-veevalidate
学习使用vee-validate

## 版本
V3.X

## 引入内置规则

#### 规则按需引入
```js
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', required)
```

#### 规则全量引入
```js
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
  extend(rules, rules[rule])
})

```

```ts
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// with typescript
for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}
```

## 国际化
#### 内置国际化文件使用方法
```js
import { localize } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh-CN.json'

localize('zh', zh)
```

#### 自定义国际化语义
```js
// 自定义国际化
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

// 切换国际化方案
localize('zh')
```