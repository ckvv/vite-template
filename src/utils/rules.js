import { REG_EXP } from '@/constant';

const RULES = {
  username: {
    pattern: REG_EXP.username,
    required: true,
    trigger: 'change',
    message: '2到20个字符',
  },
  password: {
    pattern: REG_EXP.password,
    required: true,
    trigger: 'change',
    message: '6到32非空字符',
  },
  checkPassword: {
    required: true,
    message: '两次密码不一致',
    trigger: 'change',
    validator(rule, value, callback) {
      return this.password !== value ? callback(new Error(this.message)) : callback();
    },
  },
};

function optionalRules(rules = {}) {
  const res = {};
  Object.keys(rules).forEach((key) => {
    res[key] = { ...rules[key], required: false };
  });
  return res;
}

export { RULES, optionalRules };
