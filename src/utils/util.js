function checkRes(res) {
  return (res && res.data && res.data.code === 0);
}

export {
  checkRes,
};
