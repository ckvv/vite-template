import mitt from 'mitt';
import { ElNotification } from 'element-plus';

function elNotify(type, message, options) {
  return ElNotification({
    type,
    message,
    ...options,
  });
}
const success = (message, options) => elNotify('success', message, options);
const error = (message, options) => elNotify('error', message, options);

export const bus = mitt();
export const notify = {
  success,
  error,
};
