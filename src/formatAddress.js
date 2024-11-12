/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  function returner(adresses) {
    return `${adresses.street}, ${adresses.house}, ${adresses.apartment}, ${adresses.city}, ${adresses.postalCode}, ${adresses.country}`;
  }
  return returner;
};
