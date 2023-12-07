// tobe
// 文字列のテストや数値のテスト、真偽値のテストなどは toBe を使います。
it("1と2を足すと3になる", () => {
  expect(1 + 2).toBe(3);
});

it("文字列のテスト", () => {
  expect("hoge").toBe("hoge");
});

it("真偽値のテスト", () => {
  expect(true).toBe(true);
});

// toEqual
// オブジェクトや配列が同じ構造と値を持っているかどうかをテストする場合は toEqual を使います。
it("toEqualの確認テスト", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toEqual(arr2);
});

it("toEqualの確認テスト", () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2, c: 3 };
  expect(obj1).toEqual(obj2);
});

// 期待値がテスト対象と一致しないことを確認したい
it("期待値がテスト対象と一致しないことを確認したい", () => {
  expect(1 + 2).not.toBe(4);
})