import { ref } from 'vue'

type Todo ={
  id: number,
  title: string,
}

const defaultTodos = [{id:0,title:'first'}]

export const todos = (()=>{
  const todos = ref<Todo[]>(defaultTodos)
  const addTodo = (title: string)=>{
    const newTodo: Todo ={
      id: Math.random(),
      title,
    }
    todos.value.push(newTodo)
  }
  return{todos,addTodo}

})
