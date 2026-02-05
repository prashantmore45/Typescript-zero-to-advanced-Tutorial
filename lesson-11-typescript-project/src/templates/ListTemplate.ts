import FullList from "../model/FullList";

interface DOMList {
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {

  private ul: HTMLUListElement;

  constructor(ul: HTMLUListElement) {
    this.ul = ul;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach(item => {
      const li = document.createElement("li");
      li.className = "item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = item.id;
      checkbox.checked = item.checked;
      li.append(checkbox);

      checkbox.addEventListener("change", () => {
        item.checked = checkbox.checked;
        fullList.save();
      });

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement("button");
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
