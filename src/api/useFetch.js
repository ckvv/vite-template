import { ref, shallowRef } from 'vue';
import { getToken, isFunction } from '@/utils/util';
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

function useFetch(url, options = {}) {
  const response = shallowRef();
  const data = shallowRef();
  const error = shallowRef();
  const isLoading = ref(false);

  options.headers = {
    ...options.headers,
    token: getToken(),
  };
  const execute = async () => {
    try {
      isLoading.value = true;
      response.value = await fetch(url, options);
      data.value = await response.value[options.type || 'json']();
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

export default useFetch;
