import { writable } from "svelte/store";

export const toasts = writable([]);

export function addToast(msg, type = "info", removeAfter = 5000) {
    // 1. create unique identifier
    const id = new Date().valueOf() + msg;
  
    // 2. add new toast using store.update
    toasts.update((all) => [
      {
        id,
        msg,
        type,
        removeAfter,
      },
      ...all,
    ]);
  
    // 3. set timeout for the removal of the toast after some time
    setTimeout(() => {
      removeToast(id);
    }, removeAfter);
  
    // 4. return the unique identifier
    return id;
  }

export function removeToast(id) {
  toasts.update((all) => all.filter((toast) => toast.id !== id));
}

  