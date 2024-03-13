export default function cleanSet(set, startString) {
  const array = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      array.push(item.slice(startString.length));
    }
  }

  return array.join('-');
}
