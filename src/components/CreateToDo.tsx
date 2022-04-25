import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

/**
 * useRecoilState()
 * 컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 아래와 같이 사용하면 된다.
 * 
 * useRecoilValue(state)
 * Recoil state값을 반환합니다.
 * 이 hook은 암묵적으로 주어진 상태에 컴포넌트를 구독합니다.
 * 이 hook는 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하므로 컴포넌트가 상태를 읽을 수만 있게 하고 싶을 때에 추천하는 hook입니다.
 * 이 hook을 React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링을 하도록 컴포넌트를 구독합니다.
 * 
 * useSetRecoilState(state)
 * Recoil state의 값을 업데이트하기 위한 setter 함수를 반환합니다.
 * 상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 리턴합니다.
 * setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨줍니다.
 * 
 *  
*/

function CreateToDo () {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos((oldToDos) => [{ text: toDo , id: Date.now(), category }, ...oldToDos]);
    setValue("toDo", "");
  };
  return  <form onSubmit={handleSubmit(handleValid)}>
  <input {...register("toDo", {
    required: "Please Write a ToDo"
    })}
    placeholder="Write a to do"
  />
  <button>Add</button>
</form>;
}

export default CreateToDo;