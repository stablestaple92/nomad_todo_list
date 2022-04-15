import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// Todo 기본 형태 (타입)
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

// todo의 category state - enum Categories를 type으로 가짐.
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

// todo 기본 state 형태 (타입)
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