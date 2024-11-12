/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  function returner(adresses) {
    return `${adresses[order[0]]}, ${adresses[order[1]]}, ${adresses[order[2]]}, ${adresses[order[3]]}, ${adresses[order[4]]}, ${
      adresses[order[5]]
    }`;
  }
  return returner;
};
