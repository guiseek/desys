/**
 * @param time tempo de espera para execução, em segundos
 */
export const loop = (time: number, limit = -1) => {
  return {
    /**
     * @param fn função a ser executada
     */
    run: (fn: () => void) => {
      let count = 0;

      const intervalId = setInterval(() => {
        fn();

        count++;
        if (count === limit) clearInterval(intervalId);
      }, time * 1000);

      return {
        destroy: () => clearInterval(intervalId),
      };
    },
  };
};
