import { ref, shallowRef } from 'vue';
import { getToken, isFunction } from '@/utils/util';
import { error as errorMsg, success as successMsg } from '@/plugins/element-plus';

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
      isLoading.value = false;
      if (options.success) {
        if (isFunction(options.success)) {
          options.success(response);
        } else {
          successMsg(options.success);
        }
      }
    } catch (err) {
      error.value = err;
      if (options.error) {
        if (isFunction(options.error)) {
          options.error(err);
        } else {
          errorMsg(options.error);
        }
      }
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
