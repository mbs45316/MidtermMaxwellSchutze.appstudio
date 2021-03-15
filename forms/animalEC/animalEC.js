myAnimals = ['dog', 'cat', 'horse', 'meerkat']

for (i = 0; i < 2; i ++) {
    myAnimals.push(prompt('Enter an animal name:'))
    console.log(`The last animal is a/an ${myAnimals[myAnimals.length-1].toLowerCase()}.`)
}