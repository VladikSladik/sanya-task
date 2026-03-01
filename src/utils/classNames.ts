type Item = string | Record<string, boolean> | undefined;
const classNames = (...args: Item[]) => {
  const result: string[] = [];
  for (const item of args) {
    if (!item) continue;

    if (typeof item === 'object') {
      for (const key in item) {
        if (item[key]) {
          result.push(key);
        }
      }
      continue;
    }

    result.push(item);
  }

  return result.join(' ');
};

export default classNames;
