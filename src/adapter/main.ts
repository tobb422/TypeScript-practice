import { Print, PrintBanner } from './banner'

const p: Print = new PrintBanner('Hello');
p.printWeak();
p.printStrong();