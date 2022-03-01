import { ref, shallowRef } from 'vue';
import { isFunction } from '@/utils/util';
import { checkRes } from '@/utils/helpers';
import { error as errorMsg, success as successMsg } from '@/plugins/element-plus';
import instance from '@/api/instance';

function runErrorHandler(handler, ...args) {
  if (handler) {
    if (isFunction(handler)) {
      handler(...args);
    } else {
      errorMsg(handler);
    }
  }
}

function runSuccessHandler(handler, ...args) {
  if (handler) {
    if (isFunction(handler)) {
      handler(...args);
    } else {
      successMsg(handler);
    }
  }
}

function useAxios(url, options = {}) {
  const response = shallowRef();
  const data = shallowRef();
  const error = shallowRef();
  const isLoading = ref(false);

  const execute = async (params) => {
    const defaultParams = { ...options, ...params };
    try {
      isLoading.value = true;
      response.value = await instance(url, defaultParams);
      data.value = response.value.data;
      isLoading.value = false;

      if (!checkRes(response.value)) {
        runErrorHandler(defaultParams.error, 'he');
      } else {
        runSuccessHandler(defaultParams.success, data.value.data);
      }
    } catch (err) {
      console.log(err);
      error.value = err;
      runErrorHandler(defaultParams.error, err);
    }
  };
  return {
    response,
    data,
    error,
    isLoading,
    execute,
  };
}
['get', 'post', 'put', 'delete'].forEach((method) => {
  useAxios[method] = (url, params, options) => useAxios(url, { ...params, method }, options);
});
export default useAxios;
