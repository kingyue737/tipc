import {
  ActionGeneratorFunction,
  ActionPromiseFunction,
  ActionFunction,
} from "./types"

const createChainFns = <TInput = void>() => {
  return {
    input<TInput>() {
      return createChainFns<TInput>()
    },

    action: <TResult, T extends ActionFunction<TInput, TResult>>(action: T) => {
      return {
        action,
      }
    },
  }
}

const tipc = {
  create() {
    return {
      procedure: createChainFns<void>(),
    }
  },
}

export { tipc }
