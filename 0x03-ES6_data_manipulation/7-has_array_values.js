export default function hasValuesFromArray(set, array) {
  const matchingValues = array.every((value) => set.has(value));
  return matchingValues;
}
