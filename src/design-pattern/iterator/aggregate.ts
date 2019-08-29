import Iterator from './iterator'

interface Aggregate {
  iterator: () => Iterator
}

export default Aggregate
