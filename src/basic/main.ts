// literal types
let user:  'a' | 'b' | 'c'
user = 'o'


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

type AB = A | B

let ab: AB = {
  a: 'string',
  b: true,
  test: { aa: 'string' }
}
