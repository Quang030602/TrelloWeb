export const mapOrder = (originalArray, orderArray, key) => {
  if (!Array.isArray(originalArray) || !Array.isArray(orderArray) || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
  });

  return orderedArray;
};