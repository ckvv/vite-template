import mitt from 'mitt';
import { WS_TYPE } from '@/constant';
import { getToken } from '@/utils/util';

let ws;
const emitter = mitt();

const reconnect = async () => new Promise((resolve, reject) => {
  ws = new WebSocket('ws://localhost:8001', [getToken()]);
  ws.onopen = () => {
    console.log('ws: open');
    resolve();
  };

  ws.onclose = () => {
    console.log('ws: onclose');
  };

  ws.onerror = () => {
    console.log('ws: onerror');
    reject();
  };

  ws.onmessage = (result) => {
    const { type, data } = JSON.parse(result.data);
    if (!WS_TYPE[type]) return;
    emitter.emit(WS_TYPE[type], data);
  };
});
reconnect();

const close = (reason) => {
  if (!ws) return;
  ws.close(1000, reason);
};

const send = async (data) => {
  if (!ws || ws.readyState !== ws.OPEN) {
    await reconnect();
  }
  ws.send(JSON.stringify(data));
};

window.onbeforeunload = () => {
  close();
};

export {
  WS_TYPE,
  emitter,
  close,
  send,
};
