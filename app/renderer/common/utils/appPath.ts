// 由于希望使用electron提供的getAppPath方法，但是该方法只能在主进程中使用
// 因此在渲染进程和主进程之间只能使用IPC通信，因此有了这个文件

// 监听主进程和渲染进程通信
import { ipcRenderer } from 'electron';

/**
 * @description 获取项目绝对路径
 * @returns {Promise<string>}
 */
export function getAppPath(): Promise<string> {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目路径错误'));
      }
    });
  });
}