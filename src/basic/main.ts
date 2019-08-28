// literal types
let user: 'a' | 'c'
user = 'a'

// intersection types
type AA = {
  aa: string
}

type A = {
  a: string
  test: AA
}

type BB = {
  bb: boolean
}

type B = {
  b: boolean
  test: BB
}

let ab: A & B = {
  a: 'string',
  b: true,
  test: { aa: 'string', bb: true },
}
