// describeを使えば、グループ化することができる

describe("group", () => {
  it("test1", () => {
    const arr = [];
    arr.push("test1");
    expect(arr).toEqual(["test1"]);
  });

  it("test2", () => {
    const arr = ["ele1", "ele2"];
    expect(arr.length).toBe(2);
  });

  describe("group2", () => {
    it("test3", () => {
      const arr = ["ele1", "ele2"];
      expect(arr.indexOf("ele1")).toBe(0);
    });
  });
});

// describeの中にdescribeを入れ子にすることもできる
