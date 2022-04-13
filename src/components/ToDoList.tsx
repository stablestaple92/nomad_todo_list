import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList () {
  const toDos = useRecoilValue(toDoState); // get & modify value
  // const value = useRecoilValue(toDoState); // get value 
  // const modFn = useSetRecoilState(toDoState); // modify value


  return (
    <div>
      <h1>TO DOS</h1>
      <CreateToDo/>
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
    </div>
  );
}

/* about react-hook-form
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
