<template>
  <!-- v-if="조건식" : 조건식이 참 일때만 HTML 보여줌-->
  <div @click="isOpenModal = !isOpenModal">
    <div class="black-bg" v-if="isOpenModal === true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용임</p>
      </div>
    </div>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  <div>원룸샵</div>
  <!-- vue의 반복문 -->
  <!-- <태그 v-for="작명 in 몇회" :key="" -->
  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{ 작명 }}</a>
  </div>
  <div v-for="(product, i) in products" :key="i">
    <h4 @click="isOpenModal = !isOpenModal">{{ product.name }}</h4>
    <p>{{ product.price }} 만원</p>
    <!-- @ == v- 의 약자 -->
    <button @click="product.reportNum += 1">허위매물신고</button><span>신고수 : {{ product.reportNum }}</span>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import oneroomdata from './assets/oneroom'


export default {
  name: 'App',
  data() {
    return {
      // 데이터 보관함 : 저장하고 싶은 변수들을 다 담아놓으면 됨
      // HTML 속성도 데이터 바인딩 가능
      // :(콜론)style="데이터이름" 으로 지정
      isOpenModal: false,
      menus: ['Home', 'Shop', 'About'],
      products: [{ name: '역삼동원룸', price: 50, reportNum: 0 }, { name: '하삼동원룸', price: 60, reportNum: 0 }, { name: '수완동원룸', price: 80, reportNum: 0 }],
    }
  },
  // vue에서 함수 만들고 싶으면 method에다가 다 몰빵
  // 주의: 함수안에서 데이터쓸 땐 this.데이터명 이렇게 해야 함
  methods: {
    // increase(){
    //   this.product.reportNum += 1
    // }
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background-color: darkslateblue;
  padding: 1rem;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 20px;
}</style>
