import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        title: 'sample',
        complete: false,
      },
    ],
    newTodo: '',
  },
  mutations: {
    addTask(state, payload) {
      state.todos.push(payload);
    },
    editTask(state, payload) {
      let targetTask = state.todos.find((el) => el.id === payload.id);
      // targetTask.complete = payload.complete;
      // targetTask.title = payload.title;
      Object.assign(targetTask, payload);
    },
    deleteTask(state, payload) {
      // let removeTask = state.todos.indexOf(
      //   state.todos.find((el) => el.id === payload.id)
      // );
      let targetTask = state.todos.find((el) => el.id === payload.id);
      let deleteIndex = state.todos.indexOf(targetTask);
      state.todos.splice(deleteIndex, 1);
    },
    initaliseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
