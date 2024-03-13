export default function updateUniqueItems(map) {
  const maplist = map;

  if (maplist instanceof Map) {
    for (const [key, value] of maplist) {
      if (value === 1) {
        maplist.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return maplist;
}
