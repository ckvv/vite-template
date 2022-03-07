import { ref, shallowRef } from 'vue';
import { isFunction } from '@/utils/util';
import { checkRes } from '@/utils/helpers';
import { notify } from '@/plugins/element-plus';

function runErrorHandler(handler, ...args) {
  if (handler) {
    if (isFunction(handler)) {
      handler(...args);
    } else {
      notify.error(handler);
    }
  }
}

function runSuccessHandler(handler, ...args) {
  if (handler) {
    if (isFunction(handler)) {
      handler(...args);
    } else {
      notify.success(handler);
    }
  }
}

function useFetch(useFetchInput, useFetchInit = {}, useFetchOptions = {}) {
  const response = shallowRef();
  const data = shallowRef();
  const error = shallowRef();
  const isLoading = ref(false);

  const execute = async (fetchInit, fetchOptions) => {
    const input = useFetchInput;
    const init = { ...useFetchInit, ...fetchInit };
    const options = { ...useFetchOptions, ...fetchOptions };
    try {
      isLoading.value = true;
      response.value = await fetch(input, init);
      data.value = await response.value[fetchInit.type || 'json']();
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
