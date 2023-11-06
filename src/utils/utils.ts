export const wait = async (timeoutInMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutInMs);
  });
};

export const handlePromise = async <T extends unknown = unknown, E extends Error = Error>(promise: Promise<T>): Promise<[null, T]|[E, null]> => {
  try {
    const resolveResult = await promise;

    return [null, resolveResult];
  } catch (error) {
    return [error as E, null];
  }
};

export const log = (...args: any[]) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
