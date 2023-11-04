# 목표
vue를 이용해 todolist 만들기

## 사용하는 기능 정리
#### ref
: ref는 v-for 장에서 언급한 key 속성과 유사한 특수 속성
```
<script setup>
import { ref, onMounted } from 'vue'

// 엘리먼트 참조를 위해 ref를 선언하십시오.
// 이름은 템플릿 ref 값과 일치해야 합니다.
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```
- react의 useRef와 유사한 듯하다. key처럼 특정 값을 구분하고 해당 값을 추출하는 족집게 같은 친구인듯?
#### onMounted
> 을 이해하려면 vue의 life cycle hook을 이해해야 함ㅠ
해당 부분은 노션에 정리하겠음<br>
https://gem-wire-68e.notion.site/vue-Life-Cycle-272a3f1fb4044452875e1d59bddbf238?pvs=4
#### computed
컴퓨티드(computed) 속성은 템플릿의 데이터 표현을 더 직관적이고 간결하게 도와주는 속성
- 즉, **가독성**을 위한 코드
```
<div>{{ message.split('').reverse().join('') }}</div>
```
  - 바닐라자바스크립트 문법을 통해 기능을 구현하면, 해석하는 데에 시간이 오래 걸림
  - 이를 해결하기 위한 것이 computed
```
Vue.createApp({
  data() {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
})
```
- computed로 만든 코드는
```
<div>{{reversedMessage}}</div>
```
- 로 간단하게 사용할 수 있음.
- ※ 주의, computed는 인자를 받지 않슴니다~
  - reversedMessage()<= 요 안에 매개변수를 넣어도 동작하지 않아요. <br> 템플릿에 선언한 컴퓨티드 속성에 괄호가 생기는 순간 해당 템플릿을 실제 DOM으로 변환할 때 라이브러리에서 에러를 발생시킵니다.
- ! 여기서 의문, 왜 script에 그냥 클래스나 함수를 정의하는 것이 아니라 computed를 쓰는 걸까?
  - 이 부분은 여쭤보거나, 알아봐야 함.
#### watch
watch 속성은 특정 데이터의 변화를 감지하여 자동으로 특정 로직을 수행해주는 속성입니다.
> 마치 react의 useEffect 같네요? watch가 지켜본다는 뜻임을 감안하면, vue쪽의 이름이 더 직관적인 것 같은 느낌이군용

- 예시 코드

```
  Vue.createApp({
  data() {
    return {
      message: 'Hello'
    }
  },
  watch: {
    message: function(value, oldValue) {
      console.log(value);
    }
  }
})
```
- message라는 데이터에 watch 속성을 지정한 코드로, message의 데이터가 변할 때마다 watch 속성에 정의한 message() 함수가 실행되면서 콘솔에 변한 데이터를 출력
- 다음과 같이 활용할 수도 있다고 함
  - watch 속성에 메서드 함수를 연결
  - 핸들러와 초기 실행 옵션

#### v-model
 v-model의 역할은 "변경과 데이터를 엮어주는 것"이라고 할 수 있다. 즉,  (1) 표시할 데이터 (2) 변경이 있다면 데이터에 반영 이 두 가지를 세트로 한 것이 쌍방향(two-way) 데이터 바인딩
 > v-model 속성은 v-bind와 v-on의 기능의 조합으로 동작합니다. 매번 사용자가 일일이 v-bind와 v-on 속성을 다 지정해 주지 않아도 좀 더 편하게 개발할 수 있게 고안된 문법인 거죠. 앞에서 살펴본 코드를 아래와 같이 변경하더라도 동일하게 동작
- 즉, 사용자가 입력한 값을 동시에 localstorage에 업데이트 시켜주는 것이라는 것 같다.

#### JSON.stringify(value, replacer, space)
JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환
- value(필수): JSON 문자열로 변환할 값이다.(배열, 객체, 또는 숫자, 문자 등이 될 수 있다.)
- replacer(선택): 함수 또는 배열이 될 수 있다. 이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.

---
**참고링크**
- https://joshua1988.github.io/vue-camp/syntax/computed.html#computed-%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC-%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5
- https://joshua1988.github.io/vue-camp/syntax/watch.html#watch-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8
- v-model : https://engineer-mole.tistory.com/333
- v-model : https://joshua1988.github.io/web-development/vuejs/v-model-usage/
