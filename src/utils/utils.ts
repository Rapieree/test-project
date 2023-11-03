export const wait = async (timeoutInMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutInMs);
  });
};
