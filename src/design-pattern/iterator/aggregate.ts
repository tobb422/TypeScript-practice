import Iterator from './iterator'

interface Aggregate<T> {
  iterator: () => Iterator<T>
}

export default Aggregate
