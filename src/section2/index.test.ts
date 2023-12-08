import { ShoppingList } from "."

describe('section2', () => {
  let shoppingList : ShoppingList

  beforeEach(() => {
    shoppingList = new ShoppingList()
  })

  describe('addItem', () => {
    it('should add item to list', () => {
      shoppingList.addItem('item1')
      expect(shoppingList.list).toEqual(['item1'])
    })
  })

  describe('removeItem', () => {
    it('should remove item from list', () => {
      shoppingList.addItem('item1')
      shoppingList.removeItem('item1')
      expect(shoppingList.list).not.toContain('item1')
    })
    // toContainは配列に引数の要素が存在するかを確認する

    it('リストにアイテムが存在しない場合はエラー',() =>{
      expect(() => shoppingList.removeItem('item1')).toThrow('アイテム: item1 は存在しません')
    })
  })
})