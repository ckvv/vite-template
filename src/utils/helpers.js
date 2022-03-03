import { nextTick } from 'vue';
import { close } from '@/api/ws';

async function checkForm(form) {
  return new Promise((res) => {
    form.validate((valid) => {
      res(valid);
    });
  });
}

function resetForm(form) {
  nextTick(() => {
    form.resetFields();
  });
}

function checkRes(res) {
  return (res && res.data && res.data.code === 0);
}

function signOut(href = '') {
  close();
  window.localStorage.removeItem('token');
  window.location.href = href;
}

export {
  checkRes,
  checkForm,
  resetForm,
  signOut,
};
