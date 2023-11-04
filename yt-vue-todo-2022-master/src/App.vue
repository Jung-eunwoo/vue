<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)


const todos_asc = computed(() => todos.value.sort((a, b) => {
	return b.createAt - a.createAt
}))
const addTodo = () => {
	if (input_content.value.trim() === '' || input_category.value === null) {
		return 
	}
	console.log('addTodo')

	todos.value.push({
		content: input_content.value,
		category: input_category.value,
		done: false,
		createAt: new Data.getTime()
	})
// push만 해서는 watch에 감지되지 않음
// 내부에 추가되는거지 문법상 todos라는 변수가 변화된 것으로 쳐지지 않기 때문에
	todo
}

watch(todos, newVal => {
	localStorage.setItem('todos',JSON.stringify(newVal))
})

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

onMounted(() => {
	name.value = localStorage.getItem('name') || ''
})

</script>
<template>
	<main class="app">
		<section class="greating">
			<h2 class="title">
				What'up, <input type="text" placeholder="Name here" v-model="name">
			</h2>
		</section>
		<section class="create-todo">
			<h3>CREATE A TODO</h3>
			<form @submit.prevent="addTodo">
				<h4>What's on your todo list?</h4>
				<input type="text" placeholder="e.g. make a video" v-model="input_content">

				<h4>Pick a category</h4>
				<div class="options">
					<label>
						<input type="radio" name="category" value="Business" v-model="input_category">
						<span class="bubble business"></span>
						<div>Business</div>
					</label>
					<label>
						<input type="radio" name="category" value="Personal" v-model="input_category">
						<span class="bubble Personal"></span>
						<div>Personal</div>
					</label>
				</div>
				<input type="submit" value="Add todos">
			</form>
		</section>
	</main>
</template>