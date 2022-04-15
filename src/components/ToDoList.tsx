import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList () {
  // useRecoilValue는 atom이나 selector의 값을 반환하지만
  const toDos = useRecoilValue(toDoSelector);
  // useRecoilState는 갑과 더불어 modifier함수도 제공한다
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  // const value = useRecoilValue(toDoState); // get value 
  // const modFn = useSetRecoilState(toDoState); // modify value

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form action="">
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo />
      {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  );
}

/* about react-hook-form
// react-hook-form의 register함수를 사용하면 onChange이벤트 핸들러를 사용할 필요가 없다.
interface IForm {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  password1: string,
  extraError?: string,
}

function ToDoList() {
  const { 
    register,
    handleSubmit,
    formState:{ errors },
    setError
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    }
  });
  const onValid = (data: IForm) => {
    if(data.password !== data.password1) {
      setError("password1",
        { message: "Password are not the same value" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server offline" });
  }
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email" />
        <span>{errors?.email?.message}</span>
        <input {...register("firstName", { 
                required: "write here",
                minLength: 10,
                validate: {
                  noNico: (value) => value.includes("nico") ? "no nico allowed" : true, 
                  noNick: (value) => value.includes("nick") ? "no nick allowed" : true,
                },
              })}
              placeholder="First Name" />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName", { required: "write here"})} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>
        <input {...register("username", { required: "write here"})} placeholder="Username" />
        <span>{errors?.username?.message}</span>
        <input {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })} placeholder="Password" />
        <span>{errors?.password?.message}</span>
        <input {...register("password1", { required: "Password is required", minLength: 5 })} placeholder="Password1" />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
*/
export default ToDoList;
