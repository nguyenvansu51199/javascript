function getFullName(firstName, lastName) {
  // your code here
  if (firstName === '') firstName = ' ';
  if (lastName === '') lastName = ' ';
  if ((lastName === undefined) && (firstName.trim().firstName.indexOf(' ') >= 0)) {
    firstName = firstName.trim().firstName.slice(0, firstName.indexOf(' '));
    lastName = firstName.trim().firstName.slice(firstName.indexOf(' ') + 1);
  };

  // if (lastName === undefined ) lastName = ' ';
  const firstLetter = firstName[0].toUpperCase();
  const rest = firstName.slice(1).toLowerCase();
  const firstNameFull = `${firstLetter.trim()}${rest.trim()}`;
  if (firstNameFull.indexOf(' ') && (lastName === '' || lastName === undefined)) {
    lastName = `${firstNameFull.slice(firstNameFull.indexOf(' '))}`};

  const firstLetterOfLastName = lastName[0].toUpperCase();
  const restOfLastName = lastName.slice(1).toLowerCase();
  const firstLetterOfLastNameFull = `${firstLetterOfLastName.trim()}${restOfLastName.trim()}`;


    if (firstNameFull === '') return `${firstLetterOfLastNameFull}`;
    if (firstLetterOfLastNameFull === '') return `${firstNameFull}`;
  return `${firstNameFull} ${firstLetterOfLastNameFull}`;
}

console.log(getFullName('sU', 'nguyEn'));
console.log(getFullName('sU', ''));
console.log(getFullName('', 'nguyEn'));
console.log(getFullName('nguyEn'));
console.log(getFullName('nguyEn sd'));
console.log(getFullName('nguyEn sd', 'avc'));



