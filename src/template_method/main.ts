import AbstractDisplay from './abstract_display'
import StringDisplay from './string_display'

const display: AbstractDisplay = new StringDisplay("Hello, World!!");
display.display()
