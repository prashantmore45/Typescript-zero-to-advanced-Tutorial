import ListItem from "./ListItem";

interface IList {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

type StoredItem = {
  _id: string;
  _item: string;
  _checked: boolean;
};

export default class FullList implements IList {

  static instance: FullList = new FullList();

  private static readonly STORAGE_KEY = "myList";

  private _list: ListItem[];

  private constructor(list: ListItem[] = []) {
    this._list = list;
  }

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList = localStorage.getItem(FullList.STORAGE_KEY);
    if (!storedList) return;

    try {
      const parsedList = JSON.parse(storedList) as StoredItem[];

      this._list = [];

      parsedList.forEach(item => {
        this.addItem(
          new ListItem(item._id, item._item, item._checked)
        );
      });
    } catch {
      this._list = [];
    }
  }

  save(): void {
    localStorage.setItem(
      FullList.STORAGE_KEY,
      JSON.stringify(this._list)
    );
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}
