# 가가오톡

![LOGO](https://memo-28314.firebaseapp.com/assets/img/logo/logo-gagaotalk.png)

## 설명
카카오톡을 클론할려다가 css 퍼블리싱이 매우 귀찮아서 대충 오픈소스 따다 페이지 만들기로 하였다.

새로 작성하기도 귀찮고 하여 기존에 있던 simpleMemo에 기능을 계속 추가하고 있다.

지금 생각하고 있는 기능은 채팅, 피드, 포스팅 정도 ..??

백엔드 이해가 부족하여 파이어베이스DB가 아닌 RDB를 사용할까 생각중 ..

## 폴더구조

```
gagaotalk
├─hooks
├─resources
├─src
│  ├─app
│  │  ├─biz
│  │  │   ├─models
│  │  │   └─service
│  │  └─web
│  │      ├─+chatting
│  │      │  ├─+list
│  │      │  │  └─item
│  │      │  └─+room
│  │      ├─+friend
│  │      │  └─+list
│  │      │      └─profile
│  │      └─share
│  │          ├─alert
│  │          ├─content
│  │          │  └─search-bar
│  │          └─modal
│  ├─assets
│  └─theme
└─www
```
route 단위마다 +를 붙이며 각각 모듈로 나뉘어져있다.

share는 공통된 컴포넌트들을 모아놓은 곳이다.

+폴더의 직계자손(즉 url 라우트페이지)라면 ionic g page로 생성하고 그 밖에 (자식, 공통 컴포넌트)는 ionic g component로 생성한다.

컴포넌트는 그 뎁스의 부모 모듈까지만 알고있어야한다.

특별한 규칙은 없으나. 공통적으로 부모 페이지 리스트의 아이템이라면 그냥 아이템이라고 정한다.

angular의 cli와 ionic의 cli가 용어가 조금 다른데 angular 용어로 통일할까 생각중.

코드 이쁘게 잘 짜야함.

## 사용 기술
- Ionic
- Angular
- Firebase
- Markdown(구현예정)
