/**
 * This is the MrCoaxallStack
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-17
 */

class MrCoxallStack {
  // private array
  private readonly stack: number[] = []

  // gathers the pushed number
  Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // getter
  getStack(): number[] {
    return this.stack
  }

  // pops top number
  popNumber(): number | undefined | string {
    if (this.stack.length !== 0) {
      return this.stack.pop()
    } else {
      return 'No items to pop'
    }
  }

  // peeks top number only
  peekStack(): number | undefined | string {
    if (this.stack.length !== 0) {
      return this.stack[this.stack.length - 1]
    } else {
      return 'No items to peek'
    }
  }

  // clear whole stack
  clearStack(): void {
    this.stack.length = 0
  }
}
export = MrCoxallStack
