export const debounce = <T extends any[]>(
  cb: (...args: T) => void,
  delay = 2000
) => {
  let timer: number | null = null;

  return (...args: T) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};
