# bumineun WebApp repo

> ## 캡스톤 경진대회 프로젝트

> ### `범인은(bumineun)` 팀프로젝트
>
> SNS 커뮤니티 사이트에서의 은어 사용에 대한 분석

<img src="https://user-images.githubusercontent.com/72871841/178038944-919e2a64-2b47-4372-aa32-0d102387fece.png" width="45%" alt="예전로고">

<img src="https://user-images.githubusercontent.com/72871841/178038955-db04c720-7041-429d-9967-259f26f7d91d.png" width="45%" alt="최신로고">

### 안드로이드 버전

[bumineun_android](https://github.com/SNS-bumineun/SNSAnalysis)  
<https://github.com/SNS-bumineun/SNSAnalysis>

### 웹앱 버전

- 현재 배포 진행중  
  [bumineun_webApp](https://bumineun.netlify.app)  
  <https://bumineun.netlify.app>

- `android` --> `WebApp`
  ~refactoring

## [프로젝트 소개]

- SNS 커뮤니티 사이트에서의 은어 사용에 대한 분석 웹앱 프로젝트
- SNS 커뮤니티에서 크롤링한 데이터를 가져와 분석 및 가공하는 로직을 통해 API 서버로부터 클라이언트로 불러와 보여주는 웹앱 프로젝트
- 웹 개발은 Node.js 기반, 데이터 크롤링 및 형태소 추출은 Python 기반
- 개발 기간
  - 2022.09.01 ~ 2022.10.28

## [실행 화면]

- 메인 탭 기능

  ![메인탭](document/img/메인탭.gif)

- 메인 페이지 & 범죄 사전 페이지

  ![뉴스API](document/img/뉴스api.gif)
  ![범죄카테고리](document/img/범죄카테고리.gif)

- 은어 사전 & 통계 페이지

  ![단어등록추천](document/img/단어등록추천.gif)
  ![차트](document/img/차트.gif)

- 검색 페이지

  ![검색_1](document/img/검색_1.gif)
  ![검색_2](document/img/검색_2.gif)

---

### [사용 언어 및 개발 환경]

- **FE**
  - HTML5, CSS3, ES6, React.js, Redux.js, Redux-Saga, TypeScript, Sass(SCSS), Bootstrap, Chart.js, Swiper.js
- **BE**
  - Express.js, Sequelize.js, Axios, MSSQL
  - Crowling ⇒ Python 환경에서 진행

---

> - 메인
>   - 스와이퍼를 이용한 탭기능 구현
>   - 공용으로 사용하는 헤더와 베너 컴포넌트 구성
>   - `react-router-dom`으로 헤더에서 뒤로가기, 검색 링크 구현
>     범죄 뉴스 하단에 범죄 카테고리로 넘어가는 링크 구현
> - 검색
>   - ref를 이용해 부트스트랩 컴포넌트에서 검색어 추출 기능 구현
>   - 검색 버튼 클릭 시 검색 결과 컴포넌트 렌더링 구현
> - 범죄 사전
>
>   - 카테고리 메인 페이지 구현
>   - 메인 페이지에서 카테고리 버튼 클릭 시 사전 페이지에
>     해당 카테고리 값을 파라미터로 넘겨주는 기능 구현
>   - 후에 데이터 받아올 테이블 구현
>   - 데이터 테이블에 링크를 걸어 각 단어의 상세 페이지로 이동 구현
>
> - front, back 영역 구분지어 레포지토리 생성
> - 사전 컴포넌트
>   - 사전 메인 컴포넌트 테이블 영역 구현
>   - 추천 시 카운트 업 기능 프로토타입 구현
>   - 코멘트 등록 시 단어의 의미 추가 기능 구현
> - 통계 컴포넌트
>   - 통계 메인 컴포넌트 100일, 200일 테이블 구현
>   - 통계 상세 컴포넌트 페이지 구현
> - 검색
>   - 검색 결과 컴포넌트에 링크 연결,
>     - 범죄 영역엔 카테고리까지 파라매터로 넘겨주기 구현
> - 헤더, 배너
>   - 크기 조정, 포지션 값 고정 구현
>   - 헤더는 z-index 값 9로 고정
> - CSS
>
>   - 반응형 css 구현
>
> - front
>   - redux-saga로 상태 관리 적용
>   - typescript 적용으로 타입 지정 적용
>   - error-boundary로 에러 페이지 적용
> - back
>
>   - nodejs, express로 api 서버 구축
>   - sequelize로 mssql-server와 연동
>
> - front
>   - `ChartJS`로 그래프 구현
>   - 리덕스로 데이터 받아와 뿌려주기
> - back
>   - 데이터베이스서버에서 데이터 받아와 데이터 가공해 프론트 서버로 넘겨주기 구현
>   - DB에서 데이터 가공 로직 추가와 10월달 최신화 완료
> - Newscatcher api 사용해 범죄 관련 뉴스 가져오기
>   - ~~현재 무료 라이센스 요청 범위 초과,,,~~
>   - ~~두 개 다 현재 초과,,,~~
>   - 요청 범위 제한 늘려달라는 이메일 전송 상태
>   - 늘어나면 api키 추가 예정
> - MainComponent에 Footer 추가
> - 현재 웹앱 배포 진행중
>   - 프론트는 Netlify에 정적 배포
>   - 백은 Heroku에 노드 서버 배포
> - 실시간 데이터 증감률 계산 로직 추가
>   - 증감률 상태 탭에 추가
