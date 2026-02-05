import './css/style.css';
import FullList from "./model/FullList";
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  const fullList = FullList.instance;

  const ul = document.getElementById("listItems") as HTMLUListElement;
  const listTemplate = new ListTemplate(ul);

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  const input = document.getElementById("newItem") as HTMLInputElement;
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;

  itemEntryForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const newEntryText = input.value.trim();
    if (!newEntryText) return;

    const itemId =
      fullList.list.length
        ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
        : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText);

    fullList.addItem(newItem);
    listTemplate.render(fullList);
    input.value = "";
  });

  clearItems.addEventListener("click", () => {
    fullList.clearList();
    listTemplate.clear();
  });

  fullList.load();
  listTemplate.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
