/**
 * This program uses MrCoaxallStack
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-17
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
while (true) {
  const userInput = prompt('Enter a number (! to pop): ')

  if (userInput === '!') {
    break
  } else {
    const number = parseInt(userInput)
    if (isNaN(number)) {
      console.log(`${userInput} is NaN`)
    } else {
      myStack.Push(number)
    }
  }
}

console.log('')
console.log(myStack.getStack())

console.log('Peek:', myStack.peekStack())
const popValue = myStack.popNumber()
if (popValue == null) {
  console.log('Nothing to pop')
} else {
  console.log(`Popped: ${popValue} out of stack`)
}

myStack.clearStack()
console.log('... clearing stack ...')
console.log(myStack.getStack(), 'stack cleared')

console.log('\nDone.')
