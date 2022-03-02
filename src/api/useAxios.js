import axios from 'axios';
import { ref, shallowRef } from 'vue';
import { isFunction } from '@/utils/util';
import { checkRes } from '@/utils/helpers';
import { error as errorMsg, success as successMsg } from '@/plugins/element-plus';

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

function useAxios(useAxiosConfig, useAxiosOptions, useAxiosInstance = axios) {
  const response = shallowRef();
  const data = shallowRef();
  const error = shallowRef();
  const isLoading = ref(false);

  const execute = async (executeConfig, executeOptions, executeInstance) => {
    const config = { ...useAxiosConfig, ...executeConfig };
    const options = { ...useAxiosOptions, ...executeOptions };
    const instance = executeInstance || useAxiosInstance;
    try {
      isLoading.value = true;
      response.value = await instance(config);
      data.value = response.value.data;

      if (!checkRes(response.value)) {
        runErrorHandler(options.error, response);
      } else {
        runSuccessHandler(options.success, data.value.data);
      }
    } catch (err) {
      error.value = err;
      runErrorHandler(options.error, err);
    } finally {
      isLoading.value = false;
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
  useAxios[method] = (params, instance) => useAxios({ ...params, method }, instance);
});
export default useAxios;
