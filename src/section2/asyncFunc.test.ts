import { delay } from "./asyncFunc";

it("delyaが指定した時間に動くことを確認する", async () => {
  const result = await delay("hello", 1000);
  expect(result).toBe("hello");
});

it("エラーの処理が動くことを確認する", async () => {
  try {
    const result = await delay("hello", -1000);
    expect(result).toBe("hello");
  } catch (e: any) {
    expect(e.message).toMatch("timeは0以上で指定してください");
  }
});
