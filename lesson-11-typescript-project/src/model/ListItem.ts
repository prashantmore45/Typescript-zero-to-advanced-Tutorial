export default class ListItem {
  private _id: string;
  private _item: string;
  private _checked: boolean;

  constructor(
    id: string = "",
    item: string = "",
    checked: boolean = false
  ) {
    this._id = id;
    this._item = item;
    this._checked = checked;
  }

  get id(): string {
    return this._id;
  }

  get item(): string {
    return this._item;
  }

  set item(value: string) {
    if (!value.trim()) return;
    this._item = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }
}
