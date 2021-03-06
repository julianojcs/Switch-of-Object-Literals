//Credits: https://betterprogramming.pub/dont-use-if-else-and-switch-in-javascript-use-object-literals-c54578566ba0

function getTranslation(rhyme) {
  switch (rhyme.toLowerCase()) {
    case 'apples and pears':
      return 'Stairs'
    case 'hampstead heath':
      return 'Teeth'
    case 'loaf of bread':
      return 'Head'
    case 'pork pies':
      return 'Lies'
    case 'whistle and flute':
      return 'Suit'
    default:
      return 'Rhyme not found'
  }
}

function getTranslationMap(rhyme) {
  const rhymes = {
    'apples and pears': 'Stairs',
    'hampstead heath': 'Teeth',
    'loaf of bread': 'Head',
    'pork pies': 'Lies',
    'whistle and flute': 'Suit'
  }

  return rhymes[rhyme.toLowerCase()] ?? 'Rhyme not found'
}

// The final part of line 10 (?? “Rhyme not found”) uses nullish coalescing to assign a default response. This means that if rhymes[rhyme.toLowercase()] is null or undefined (but not false or 0 ), then the default string “Rhyme not found” is returned. This is important because we might legitimately want to return false or 0 from our conditional.

function stringToBool(str) {
  const boolStrings = {
    true: true,
    false: false
  }

  return boolStrings[str] ?? 'String is not a boolean value'
}

function calculate(num1, num2, action) {
  const actions = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  }

  return actions[action]?.(num1, num2) ?? 'Calculation is not recognised'
  // optional chaining (the ?. in the last line of code) to only execute the response if it is defined. Otherwise, fall through to the default return string
}


// a Literals Object function that receive an object as parameter and return another object according with the object parameter property

export const getOptionItem = {
  case: (card) => ({
    _id: card._id,
    name: card.data.name,
    label: card.data.dataInicio.substr(0, 10).split('-').join('/')
  }),
  person: (card) => ({
    _id: card._id,
    name: card.data.name,
    label: card.data.IdNumber
  }),
  organization: (card) => ({
    _id: card._id,
    name: card.data.codigo,
    label: card.data.data.cnpj
  }),
  occurence: (card) => ({
    _id: card._id,
    name: card.data.name,
    label: card.data.data.substr(0, 10).split('-').join('/')
  }),
  ship: (card) => ({
    _id: card._id,
    name: card.data.code,
    label: `${card.data.imo ?? card.data.registro}`
  }),
  plane: (card) => ({
    _id: card._id,
    name: card.data.registration,
    label: card.data.data.serie
  }),
  document: (card) => ({
    _id: card._id,
    name: card.data.name,
    label: card.data.number
  })
}

console.log(getOptionItem[entity](json.data[cardType])

