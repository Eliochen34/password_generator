// define sample function to randomly return a item in an array
function sample(array){
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


// define generatePassword function
function generatePassword(options){
  
  // define the things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@#$%^&*()-_+={}[]|;"<>,.?/'
  // define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40',
  // }
  // console.log(options)
  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on'){
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on'){
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on'){
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on'){
    collection = collection.concat(symbols.split(''))
  }
  // console.log(collection)
  // remove things user do not need
  if (options.excludeCharacters){
    // console.log(`${options.excludeCharacters}`)
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
      // if the character includes in 'excludeCharacters',
      // return false to remove the character in the collection
      // if (options.excludeCharacters.includes(character) === true){
      //   return false
      // } else {
      //   return true
      // }
    )
    // console.log(collection)
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generate password
  let password = ''
  for (let i = 0; i < Number(options.length); i++){
    password += sample(collection)
  }
  // return the generated password
  return password
  // console.log('password:', password)
  // console.log('This function will generate password.')
}

module.exports = generatePassword
// generatePassword()