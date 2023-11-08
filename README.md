# REACT를 이용한 포트폴리오 사이트 만들기

### React

리액트(React)는 페이스북에서 개발한 훌륭한 JavaScript 라이브러리로, 웹 개발자들에게 사용자 인터페이스(UI)를 구축하고 관리하는 강력한 도구를 제공합니다. 이 라이브러리는 웹 애플리케이션의 성능을 향상시키기 위해 가상 DOM(Virtual DOM)을 활용하며, 컴포넌트 기반 아키텍처를 통해 코드의 재사용성을 높입니다. 또한, JSX(JavaScript XML)를 사용하여 컴포넌트를 쉽게 렌더링할 수 있어 개발자들이 웹 애플리케이션을 빠르게 개발할 수 있습니다. 리액트는 단방향 데이터 흐름, 컴포넌트 기반 구조, 그리고 다양한 커뮤니티와 생태계의 지원을 통해 웹 애플리케이션 개발을 더욱 효율적이고 즐겁게 만들어줍니다.

### GSAP

GSAP (GreenSock Animation Platform)은 JavaScript로 웹 애니메이션을 개발하기 위한 강력한 라이브러리로, 웹 요소의 위치, 크기, 스타일 및 다른 속성을 부드럽게 조절하고, 시간에 따라 다양한 애니메이션 효과를 쉽게 구현할 수 있습니다. GSAP는 애니메이션의 시작, 일시 정지, 재생, 역방향 재생과 같은 시간 제어를 제공하며, 이질적인 타이밍과 속도 조절이 가능합니다. 또한 다양한 속성 유형을 다루며 플러그인을 지원하여 더 다양한 애니메이션 효과를 추가할 수 있습니다. GSAP는 웹 개발자들 사이에서 인기가 높으며 웹 애니메이션을 효과적으로 구현하고 관리하는데 도움을 줍니다.

### lenis

lenis.js란 javascript로 작성 된 오픈소스 웹 프레임 워크입니다.
웹페이지에서 부드러운 스크롤을 가능하게하는 라이브러리입니다. 경량(~3KB), 빠른 스크롤을 지원하며 다른 애니메이션 라이브러리들과도 잘 연동되는 장점이 있어 많은 주목을 받고있는 라이브러리입니다.

## 작업 순서

1. 리액트 설치
2. git에 업로드
3. [lenis 사이트](https://github.com/studio-freight/lenis)
4. 빌드하기 `npm run build`

## 설치

1. ✔ react 설치 `npx reate-react-app 프로젝트 이름`
2. ✔ gsap 설치 `npm i gsap`
3. ✔ sass 설치 `npm i sass`
4. ✔ lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

## 트러블 슈팅

<details>
<summary>Whitespace ERROR</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데 Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것입니다.   
   
해결방법   
`git config --global core.autocrlf true` // 시스템 전체에 적용   
`git config core.autocrlf true` // 해당 프로젝트에만 적용
   
</details>

## firebase 사용하기

1. 새 프로젝트 만들기 [firebase](https://console.firebase.google.com/project/react-project1108/overview?hl=ko)
2. 터미널에서 CLI 설치 `npm install -g firebase-tools`
3. 구글 로그인 `firebase login`
4. 초기화 `firebase init`
5. 호스팅 셋업 후 build
