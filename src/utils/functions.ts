function isCep(str: string): boolean {
  const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
  return cepRegex.test(str);
}

module.exports = {
  isCep
};