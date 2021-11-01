function validateRefs(refs) {
  refs = refs || Object.keys(this.$refs);
  const errors = refs.filter((ref) => this.$refs[ref] && 'validate' in this.$refs[ref] && typeof this.$refs[ref].validate === 'function').map((ref) => this.$refs[ref].validate()).filter((val) => !!val);
  return errors.length ? errors : null;
}

async function checkForm(form = 'form') {
  return new Promise((res) => {
    this.$refs[form].validate((valid) => {
      res(valid);
    });
  });
}

function resetForm(form = 'form') {
  this.$nextTick(() => {
    this.$refs[form].resetFields();
  });
}

function checkRes(res) {
  return (res && res.data && res.data.code === 0);
}

function signOut(href = '') {
  window.localStorage.removeItem('token');
  window.location.href = href;
}

export {
  validateRefs,
  checkRes,
  checkForm,
  resetForm,
  signOut,
};
