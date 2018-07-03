export function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

export function isArray (value) {
  return value && typeof value === 'object' && value.constructor === Array;
}