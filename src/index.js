function compute() {
  let input = document.getElementById('inputText').value;
  let outputString = '';

  if (!input) {
    return '';
  }

  let labels = new Map([
    ['3', 'Foo'],
    ['5', 'Bar'],
    ['7', 'Qix'],
  ]);

  // Dans ces lignes de code dessous, on test si la valeur en entrée est divisble par 3,5 ou 7
  labels.forEach((element, index) => {
    if (input % index === 0) {
      outputString += element;
    }
  });

  // Dans ces lignes de code dessous, on test si la valeur en entrée contient 3 ou 5 ou 7
  input.split('').forEach((element) => {
    if (labels.get(element)) {
      outputString += labels.get(element);
    }
  });

  // Dans ce code là dessous, on remplace les 0 de notre entrée par des *
  // Il reste à ajouter quelques cas de figure pour affiner mieux ce code là et que ca soit identique à ce qui est demandé dans la tache 2
  input
    .split('')
    .map((element) => {
      if (element.includes('0')) outputString += element.replace('0', '*');
    })
    .join('');

  document.getElementById('outputArea').innerHTML = outputString;

  console.log('compute done !')

  return outputString;
}
