import { sum } from "./sum";

// it関数かtest関数を使う

it('1と2を足すと3になる',() =>{
    expect(sum(1,2)).toBe(3);
})