import { Product, Factory } from './factory'
import { IDCard, IDCardFactory } from './idcard';

const factory: Factory = new IDCardFactory();
const card1: Product = factory.create("Taro");
const card2: Product = factory.create("Jiro");

card1.use()
card2.use()
