function isEqual(obj1, obj2) {
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }

  // 不是对象
  if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2;

  // 同一个对象
  if (obj1 === obj2) return true;

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // 对象的健不一样
  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }
  return true;
}

export {
  isEqual
};
