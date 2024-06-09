<template>

  <div>
    <input type="text" v-model="valueModel"/>
  </div>
  <!-- v-if="조건식" : 조건식이 참 일때만 HTML 보여줌-->
  <div @click="isOpenModal = false">
    <div class="black-bg" v-if="isOpenModal === true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용임</p>
      </div>
      <button @click="isOpenModal= false">close</button>
    </div>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  <div>원룸샵</div>
  <!-- vue의 반복문 -->
  <!-- <태그 v-for="작명 in 몇회" :key="" -->
  <div class="menu">
    <a v-for="i in menus" :key="i">{{ i }}</a>
  </div>
  <div v-for="(product, i) in onerooms" :key="i" class="item-wrap">
    <img :src="product.image" alt="product image" class="img-container"/>
    <h4 @click="isOpenModal = true">{{ product.title }}</h4>
    <p>{{ product.price }} 만원</p>
    <!-- @ == v- 의 약자 -->
    <!-- <button @click="product.reportNum += 1">허위매물신고</button><span>신고수 : {{ product.reportNum }}</span> -->
  </div>

  
</template>

<script>
import data from './assets/oneroom.js'


export default {
  name: 'App',
  data() {
    return {
      // 데이터 보관함 : 저장하고 싶은 변수들을 다 담아놓으면 됨
      // HTML 속성도 데이터 바인딩 가능
      // :(콜론)style="데이터이름" 으로 지정
      onerooms:data,
      valueModel:'안녕뭐가뭔지모르겠어..',
      isOpenModal: false,
      menus: ['Home', 'Shop', 'About'],
      products: [
        { name: '역삼동원룸', price: 50, reportNum: 0, imgSrc:require('./assets/room0.jpg') },
        { name: '하삼동원룸', price: 60, reportNum: 0, imgSrc: require('./assets/room1.jpg') },
        { name: '수완동원룸', price: 80, reportNum: 0, imgSrc:require('./assets/room2.jpg') }],
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
}
.item-wrap{
  width:100%;
  padding: 0 40%;

}
.img-container{
  width: 100%;
  margin-top:40px;

}

</style>
