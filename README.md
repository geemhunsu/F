# 16조 FaceBookClone FrontEnd

### Team
+ Frontend : 김현수,강지훈,김동우 (REACT)
+ Backend :  오준석,이정인 (SPRING)

#### Project Name
F : FaceBook의 F라도 따라가자

#### Objective
1. Frontend와 Backend 다른환경에서의 연동(CORS)
2. 회원가입 & Spring에서 JWT 방식의 로그인
3. 게시판 구현(CRUD 적용)
4. 댓글 작성(CRUD 적용)
5. 좋아요 기능

### Project Collaboration Process
<details markdown = "1">
<summary>
API설계
</summary>
 <div style="width:700px; margin: auto" >

[NOTION](https://www.notion.so/5-0b6bbc932fe3490093273e632f312d9f) 

### 로그인/회원가입
|기능　　　　　|Method|URL|Request|Response|
|---|---|---|---|---|
|로그인|POST|/user/login|{<br>userId: userId<br>pwd: pwd<br>}|{<br>statusCode : 200<br>responseMessage: 로그인 성공<br>jwtToken: jwtToken,<br>userId: userId<br>}|
|회원가입|POST|/user/register|{<br>userId: userId<br>pwd: pwd<br>fistName: fistName<br>lastName: lastName<br>birth: birth<br>sex: sex<br>}|{<br>firstName: firstName<br>lastName: lastName<br>sex: sex<br>birth: birth<br>id: id<br>responseMessage: responseMessage<br>userId: userId<br>statusCode: statusCode<br>result: result<br>}|
|사용자 프로필 이미지 변경|PUT|/user/info|{<br>imageUrl: imageUrl<br>}|{<br>statusCode : 200<br>responseMessage: 사용자 이미지 수정 완료<br>userId: userId<br>imageUrl: imageUrl<br>}|
|사용자 정보 조회|POST|/user/info |-|{<br>statusCode : 200<br>responseMessage: 사용자 정보 전달<br>userId: userId<br>firstName: firstName<br>lastName: lastName<br>imageUrl: imageUrl<br>}|
|전체 사용자 정보 조회|GET|/user/list|-|{<br>statusCode : 200<br>responseMessage: 사용자 리스트 전달<br>users:[{<br>userId: userId<br>firstName: firstName<br>lastName: lastName<br>imageUrl: imageUrl<br>}]<br>}|

### 게시글,댓글
|기능　　　　　|Method|URL|Request|Response|
|---|---|---|---|---|
|게시글 작성|POST|/post|{<br>content: content<br>imageUrl: imageUrl<br>}|{<br>statusCode : 200<br>responseMessage: 게시글 작성 성공<br>}|
|게시글 수정|PUT|/post/{postId}|{<br>content: content<br>imageUrl: imageUrl<br>}|{<br>post: {<br>postId: postId<br>content: content<br>imageUrl: imageUrl<br>createdAt: createdAt<br>firstName: firstName<br>lastName: lastName<br>likeCount: likeCount<br>commentCount: commentCount<br>comments: comments<br>liked: liked<br>},<br>responseMessage: <br>responseMessage<br>statusCode: <br>statusCode<br>}|
|게시글 삭제|DELETE|/post/{postId}|-|{<br>statusCode : 200<br>responseMessage: 게시글 삭제 성공<br>}|
|게시글 조회|GET|/post?page=page|-|{<br>statusCode : 200<br>responseMessage: 게시글 조회 성공<br>page: page<br>totalPage: totalPage<br>username: username<br>userImageUrl: userImageUrl<br>posts:[{<br>postId: postId<br>content: content<br>imageUrl: imageUrl<br>createdAt: createdAt<br>firstName: firstName<br>lastName: lastName<br>likeCount: likeCount<br>commentCount: commentCount<br>isLiked: isLiked<br>comments: [{<br>commentId:commentId<br>content:content<br>userImageUrl: userImageUrl<br>createdAt: createdAt<br>userId: userId<br>firstName: firstName<br>lastName: lastName}]<br>}]<br>}|
|댓글삭제|DELETE|/comment/{commentId}|-|{<br>statusCode : 200<br>responseMessage: 댓글 삭제 성공<br>postId: postId<br>}|
|댓글수정|PUT|/comment/{commentId|{<br>content: content<br>}|{<br>comment: {<br>commentId: commentId<br>content: content<br>createdAt: createdAt<br>userId: userId<br>userImageUrl: userImageUrl<br>firstName: firstName<br>lastName: lastName<br>},<br>postId: postId<br>responseMessage: 댓글 수정 성공<br>statusCode: 200<br>}|
|댓글작성|POST|/comment|{<br>content: content<br>postId: postId<br>}|{<br>statusCode : 200<br>responseMessage: 댓글 생성 성공<br>comment: {<br>commentId:commentId<br>content:content<br>userImageUrl: userImageUrl<br>createdAt: createdAt<br>userId: userId<br>firstName: firstName<br>lastName: lastName}<br>}|
|좋아요 변경|POST|/post/{postId}/like|-|{<br>isLiked: isLiked<br>statusCode : 200<br>responseMessage: 좋아요 변경 성공<br>}|



 </div></details>

<details markdown = "1">
<summary>
Diagrams
</summary>
 <div>
<img src= "https://media.vlpt.us/images/junseokoo/post/982e77ed-0fde-4d5b-8dcd-3ddfed639e69/image.png">
 </div></details>


<details markdown = "1">
<summary>
문제점 / 해결과정
</summary>

+ ## 페이스북의 아이콘 및 스타일 그대로 따라하기
클론코딩의 키포인트는 대상을 얼마나 디테일하게 분석하고 따라하는 거라고 생각한다. 보다 똑같이 따라하기 위해서 CSS 능력이 특히 많이 요구되는데 이 부분이 이번 클론코딩의 에로사항이었다. <br>
이미 서비스 되고 있는 수준의 웹페이지를 그대로 따라하기 위해 위치도 세밀하게 폰트 컬러도 크기도 세밀하게 조정하는 것은 여간 쉬운일이 아니었다. 개발자도구를 끼고 살며 일일이 폰트 크기를 확인하고 색을컬러피커로 찍어보는 일은 정말 손이 많이 갔었다. 또한 요소들의 정확한 배치를 조정하는 과정에서 어쩔 떈 여기로 밀리고 어쩔 땐 저기로 밀리는 것이 참 힘들었다. <br>
이런 에로사항을 해결한 방법은 그냥 더 많이 구글링하고 더 많이 코딩해보는 것 뿐이었다. 좀 더 편한 방법은 있을지언정 만능인 방법은 없었기에 최대한 많은 방법을 생각하고 실행했다. 그렇게 하나하나 심혈을기울여서 따라하다보니 어느새 요령이 생겼고 결국 100%까지는 아니더라도 꾀나 비슷하게 페이스북의 디자인을 따라할 수 있게 되었다.

</details>

<details markdown = "1">
<summary>
한 주를 마치며
</summary>

## (김현수) 컴포넌트 플로우 - 헤더, 사이드바, 이미지 업로드
1. 헤더
헤더는 크게 왼쪽 가운데 오른쪽(HeaderSub.js)으로 나눴다. 기능적인 측면으로 보았을 때도 이렇게 나뉘지만 이렇게 나눈 가장 큰 이유는 flex를 통한 위치 정렬을 위해서다. 이 중 기능이 있는 것은 오른쪽(HeaderSub.js)뿐임으로 바로 오른쪽 설명으로 넘어가겠다. <br>
오른쪽에는 유저의 프로필사진과 유저의 이름 그리고 메뉴,채팅,알림,더보기 버튼으로 구성되어있다. 이 중 메뉴, 채팅, 알림 기능은 구현하지 않았고 유저프로필 사진과 더보기를 하나로 묶어 클릭했을 때 유저프로필 사진을 수정할 수 있는 모달창이 뜨게 하였다.
2. 사이드 바
사이드바는 왼쪽과 오른쪽으로 나뉘어 있고 그 중 왼쪽을 위 아래로 나눴다. 위에는 아이콘들이(기능X) 아래에는 웹사이트footer가 들어갔다. <br>
오른쪽 사이드 바는 전체 유저의 정보를 서버에서 받아와 각 유저의 프로필이미지와 이름을 한세트로하여 map()을 통해 뿌려줬다.
3. 이미지 업로드
프론트에서 S3 버킷에 업로드하고 그 이미지의 url주소를 서버 데이터베이스에 저장하는 방식을 택했다. 그러기 위해선 S3에 업로드를 할 수 있게 해주는 aws-sdk 패캐지를 받아야 했다. <br>
그리고 S3에 업로드 해주는 코드
```
AWS.config.update({
    region: "ap-northeast-2",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:3be6a8f1-b813-418a-914b-0707888dcbdc',
    }),
  })

  const uploadToAws = () => {
    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'hanghae-miniproject-team2-imagebucket',
        Key: `${profilePreview.fileName}.${profilePreview.fileType}`,
        Body: profilePreview.file,
        ACL: "public-read",
      }
    })
    const promise = awsUpload.promise();
    promise.then(data => {
    }).catch(err => {
      window.alert('업로드 실패')
    })
```
를 사용했고 뒤에 .then()을 통해 업로드가 끝난 다음 이미지url을 서버 DB와 리덕스스토어에 넘겨줬다.

#### 이번에 하면서 아쉬웠던 점
1. 컴포넌트 쪼개기
모든 리액트 입문자의 난제일 것이다. 보다 보기좋은 컴포넌트 코드관리를 위해 최소단위까지 나눴지만 여전히 코드가 더럽다(어쩌면 최소단위에 props 때문에 더 더러운 것만 같다...). 이는 컴포넌트를 나누는 방법의 문제일 수도 있으나 시작 단계에서 좀더 세밀하게 컴포넌트를 쪼갰다면 지금보다는 깨끗한 코드가 됐을 것 같다. 두 번의 프로젝트를 하면서 나름 경험이 쌓였으니 앞으로의 프로젝트는 더 꼼꼼한 초반 설계를 할 수 있을 것 같다.
2. 전역 데이터 관리하기
리액트에는 이미 오래전부터 전역데이터 관리에 대한 깊은 고민이 있었고 그것을 해결해주기 위해 리덕스라는 아주 고마운 친구가 이미 나왔다. 하지만 문제는 내가 이 친구와 아직 친하지 않다. 리액트의와 리덕스의 작동 순서 및 원리를 더 공부해서 원하는 데이터를 원하는 타이밍에 자유자재로 쓸 수 있는 사람이 되어야겠다는 생각이 이번주에 절실했다.

## (김동우) 컴포넌트 플로우
1. 포스트 뷰 작성하기(1개)
2. API 문서 확인하고 약속한 방식으로 data.json 만들기
3. 로컬서버와 map을 통해서 여러개의 포스트가 생성되는지, 값들이 잘 들어가는지 확인
4. 삭제화면 모달창 만들기
5. 로그인 회원가입 통신 이후 포스트 삭제 기능 구현
6. 좋아요 기능 구현
7. 댓글 달기 클릭 시 해당 댓글 input에 포커스 되는 기능 구현 (spread useState와 current.focus() 기능 사용)
8. 댓글 추가 기능 구현
9. 댓글 삭제 기능 구현
10. 댓글 삭제 기능 구현
11. 전체적인 기능 점검

#### 이번에 하면서 아쉬웠던 점
1. 컴포넌트 잘 쪼개기:
  이번에 포스트 컴포넌트의 뷰와 기능을 담당하였는데 간단한 구조일 줄 알고 하나의 컴포넌트로 잡고 작업을 시작했다.
  그러나 작업이 진행되면 진행 될수록 디테일한 기능이 요구되고, 삼항 연산자들이 추가되면서 코드량이 걷잡을 수 없이 커져버렸다.
  중간에 컴포넌트 분리를 하다가 오류로 인해 프로젝트가 지연될까 그대로 진행한 결과 Post.js코드는 600줄에 가까운 그야말로 스파게티 코드가 되고 말았다.
  이러한 문제는 한 눈에 컴포넌트의 구성과 양을 파악할 만큼의 실력이 없어서라고 생각된다.
  이를 방지하기 위해 앞으로는 1) 코드가 많아지고, 2) 작은 구조의 반복 이 발생하는 코드라면 즉시 컴포넌트를 쪼개는 식으로 작업을 진행해야겠다고 생각했다.
  나중에 발생하는 내 코드를 내가 잘 못알아 보고, 보기도 싫어지는 사태가 발생하기 전에 말이다.
2. 스프레드 방식 useState에서 id 값을 제대로 주지 못한 점:
  삭제 모달이나 댓글 삭제 모달을 만들 때 동일한 위치의 컴포넌트에서 여러개의 useState를 활용하여 각각의 모달을 켜고 끄는 방식을 사용했다.
  setModal 같은 상태 변화를 담당하는 변수를 함수와 스프레드 문법을 통해서 표현했는데, 그 때 값을 [id]: setModal[id] 같은 식으로 주었다.
  처음엔 작동이 잘 돼서 문제가 없을 줄 알았는데, 나중에 배포를 하고 보니 개인이 여러개의 댓글을 달면 차례대로 삭제를 할 떄 모달이 뜨지 않는 오류가 발생했다.
  다시 생각해보니 id값을 배열의 인덱스 값으로 주었는데, 이러다 보니 첫 댓글이 삭제가 되면 내용 변경이 리덕스에서 일어나면서 순서가 꼬여 발생하는 문제인 것 같다.
  map의 key값에 unique한 값을 주는 것에만 신경을 썼지 map에 들어가는 모든 요소들은(특히 변경이 일어나는 요소들) unique한 값을 주어야 한다는 것을 알 수 있었다.

## (강지훈) 컴포넌트 플로우
+ 페이스북뷰 그대로 로그인페이지를 만들고 회원가입은 모달창으로 구현했다.
서버에 넘겨줄 값이 메일과 비밀번호 외에 성(姓)과 이름, 생년월일과 성별이 있어서 이름과메일,비밀번호의 input 데이터들은 onChange와 setState를 통해 받았고, 생년월일은 연,월,일을 각각 빈 array를 만들고 new Date()를 활용하여 for문으로 각각 옵션을 select에 넣어주었다. 성별값은 material-ui의 FormControl을 사용하여 label에 각 value값을 전달받아 이를 모두담아 axios를 통해 백엔드에 dispatch하는 형식으로 통신을 시도했다.
+ 로그인 시에는 200 status 코드와 jwt 토큰을 발급해주고, 이 토큰을 document.cookie를 이용해 저장해주는 방식을 사용했다.

#### 이번에 하면서 아쉬웠던 점
1. 이번에 로그인과 회원가입구현과 포스트작성컴포넌트를 담당하였는데 생각보다 뷰를 작업하는데 시간이 너무 많이 소요되었다. 반응형으로 구현못한것이 너무 아쉬웠다.
직전에 프로젝트에서 뷰를 만들때 최소단위 컴포넌트에 프롭스값으로 넘겨받아 구현하는 형태로 작업을 하지 않아서, 이번 프로젝트시에 적응하는데 매우 힘들었다.
2. 기능을 제대로 구현하지 못한점이 몹시 아쉬웠는데 특히 서버에서 받아온 에러를 캐치하여 로그인 또는 회원가입에 alert대신 메시지로 남겨주는 기능을 구현하지 못한부분이 아쉬웠다.

</details>

[YOUTUBE 영상](https://youtu.be/ZZ4QNsdwrVo) 
