// toThrow
// 例外が発生することをテストする。
// 関数がエラーを出すことをテストする。

import { ZeroDivisorError, divide } from "./divide";

it("toThrow", () => {
  // expect(() => divide(10, 1)).toThrow();
  //  今回無名関数で書く必要は、matcherのtoThrowが呼ばれる前にエラーが起きてしまうことは防ぐため
  // 今回はエラーが起きない文なのでエラーは起きない。エラーが起きないことがテスト失敗
});

it("toThrow", () => {
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
  // エラークラスを入れることで特定のエラークラスが発生することをテストすることができる
});

// 非同期処理のテスト
// テストを行う時に、非同期処理を行うことがある。
// 非同期処理は処理が終わってからそれをテストしないといけないから厄介。上のexpectにコールバック関数を書いたのもそのため