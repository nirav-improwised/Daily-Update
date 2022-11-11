<script>
export default {
    data() {
      return {
        name: "Nirav",
        age: 20+2
      }
    }
}
</script>

<template>
  <h1>I am {{name}}</h1>
  <h1>I am {{age}} year old</h1>
</template>
// ====================================================================
<script>
export default {
  data() {
    return {
      titleClass: "textDecoration: underline",
      st: "color: blue"
    }
  }
}
</script>

<template>
  <h1 :style="[st, titleClass]">Make me red</h1> <!-- add dynamic class binding here -->
</template>

<style>
.title {
  color: red;
}
</style>

// ======================================================================
<script>
export default {
  data() {
    return {
      count: 0,
      blueButton: "color: blue",
    }
  },
  methods: {
    incrementCount(){
      this.count++
    },
    assignCount5(){
      this.count=5
    }
  }
}
</script>

<template>
  <!-- make this button work -->
  <button @click="incrementCount" >count is: {{ count }}</button>
  <button @click="assignCount5" :style="blueButton">count is: {{ count }}</button>
</template>

// ==============================================================================
<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onInput(h) {
      this.text = "Hello " + h.target.value
    }
  }
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Enter your Name">
  <p>{{ text }}</p>
</template>

// ================================================================

<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false }
      ]
    }
  },
computed: {
filteredTodos(){
    if (this.hideCompleted){
    todos = todos.filter(t => (){
                        if(!t.done){
                            return t
                            }
                        })
    }
    return
}
    // ...
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>