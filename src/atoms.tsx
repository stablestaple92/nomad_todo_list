import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// recoil selector를 통해 직접적으로 state를 수정하는 것이 아니라 state의 output을 변경하는 것. 
export const toDoSelector = selector({
  key: "toDoSelector",
  // get은 selector가 어떤 값을 return할지 결정한다
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category)
  }
});