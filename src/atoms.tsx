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
/**
 * 
 * Atom
 * Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
 * atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
 * 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 리렌더링 되는 결과가 발생할 것이다.
 * atom(): 쓰기 가능한 state를 나타내는 atom를 만듭니다.
 * 
 * selector
 * set - set 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다.
 * 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달된다.
 * 사용자가 selector를 재설정한 경우 새로 입력값은 T타입의 값 또는 DefaultValue 타입의 객체일 수 있다.
 * 콜백에는 다음이 포함된다
 * 
 * get 매개변수 : atom이나 selector로부터 값을 찾는데 사용되는 함수.
 *              이 함수는 selector를 주어진 atom이나 selector를 구독하지 않는다.
 * 
 * set 매개변수 : 업스트림 recoil상태의 값을 설정할 때 사용되는 함수.
 *              첫번째 매개변수는 recoil state, 두번째 매개변수는 새로운 값. (newValue).
 *              새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefaultValue객체일 수 있다.
 * 
 */

export const toDoSelector = selector({
  key: "toDoSelector",
  // get은 selector가 어떤 값을 return할지 결정한다
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category)
  }

  /*
  // set은 useRecoilState 처럼 state를 수정할 수 있다
  set: ({ set }, newValue) => {
    const something = newValue;
    set(somethingState, something);
  }
  
  */
});