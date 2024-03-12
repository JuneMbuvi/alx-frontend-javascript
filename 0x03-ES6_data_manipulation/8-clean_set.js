export default function cleanSet(set, startString) {
  const filteredSet = new Set();
  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredSet.add(value.slice(startString.length));
    }
  }
  return Array.from(filteredSet).join('-');
}
