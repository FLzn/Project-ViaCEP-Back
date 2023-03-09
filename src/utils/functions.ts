function isOnlyNumbers(str: string): boolean {
  return /^\d+$/.test(str);
}

module.exports = {
  isOnlyNumbers
};