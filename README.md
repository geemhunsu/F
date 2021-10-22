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
|사용자 프로필 이미지 변경|PUT|/user/info<br> optional Header :Authorization="Bearer<br>  eyJhbGciOiJIUzI<br> 1NiJ9.eyJzdWIiOiJy<br> b2NraW5d4cCI6<br> MTYzNDY1MzEwN<br> n0.fR3PrXfjAGWD8<br> 5YaXw9dmXSvXcJ9<br> dBtvnb2sHsS9j_U"|{<br>imageUrl: imageUrl<br>}|{<br>statusCode : 200<br>responseMessage: 사용자 이미지 수정 완료<br>userId: userId<br>imageUrl: imageUrl<br>}|
|사용자 정보 조회|POST|/user/info<br> optional Header :<br>Authorization="Bearer<br> eyJhbGciOiJIUzI1<br>NiJ9.eyJzdWIiOiJy<br>b2NraW5<br>d4cCI6MTYzNDY<br>1MzEwNn0.fR3PrXf<br>jAGWD85YaXw9dmXSvXcJ9<br>dBtvnb2sHsS9j_U"|-|{<br>statusCode : 200<br>responseMessage: 사용자 정보 전달<br>userId: userId<br>firstName: firstName<br>lastName: lastName<br>imageUrl: imageUrl<br>}|
|전체 사용자 정보 조회|GET|/user/list<br>Header :<br> Authorization="Bearer <br> eyJhbGciOiJIUzI1N<br> iJ9.eyJzdWIiO<br> iJyb2NraW5d4cCI6MTYz<br> NDY1MzEwNn0.fR3P<br> rXfjAGWD85YaXw<br> 9dmXSvXcJ9dBtvnb2<br> sHsS9j_U"<br> 토큰 헤더 추가하면<br>  로그인한 유저 정보를<br>  뺀 나머지 유저<br>  정보 전달|-|{<br>statusCode : 200<br>responseMessage: 사용자 리스트 전달<br>users:[{<br>userId: userId<br>firstName: firstName<br>lastName: lastName<br>imageUrl: imageUrl<br>}]<br>}|

### 게시글,댓글
|기능　　　　　|Method|URL|Request|Response|
|---|---|---|---|---|
|게시글 작성|POST|/post|{<br>content: content<br>imageUrl: imageUrl<br>}|{<br>statusCode : 200<br>responseMessage: 게시글 작성 성공<br>}|
|게시글 수정|PUT|/post/{postId}<br>Header :<br>Authorization="Bearer<br> eyJhbGciOiJIUz<br>I1NiJ9.eyJzdWIi<br>OiJyb2NraW5d4<br>cCI6MTYzNDY<br>MzEwNn0.fR3PrX<br>fjAGWD85YaXw9<br>dmXSvXcJ9dBt<br>vnb2sHsS9j_U"|{<br>content: content<br>imageUrl: imageUrl<br>}|{<br>post: {<br>postId: postId<br>content: content<br>imageUrl: imageUrl<br>createdAt: createdAt<br>firstName: firstName<br>lastName: lastName<br>likeCount: likeCount<br>commentCount: commentCount<br>comments: comments<br>liked: liked<br>},<br>responseMessage: <br>responseMessage<br>statusCode: <br>statusCode<br>}|
|게시글 삭제|DELETE|/post/{postId}<br>Header : Authorization="Bearer<br> eyJhbGciOiJIUzI<br>1NiJ9.eyJzdWIiOiJyb<br>2NraW5d4cCI6MTYzNDY1<br>MzEwNn0.fR3PrX<br>fjAGWD85YaXw9dmX<br>SvXcJ9dBtvnb2<br>sHsS9j_U"|-|{<br>statusCode : 200<br>responseMessage: 게시글 삭제 성공<br>}|
|게시글 조회|GET|/post?page=page<br>optional <br>Header : Authorization="Bearer<br> eyJhbGciOiJIUzI1Ni<br>J9.eyJzdWIiOiJ<br>yb2NraW5d4cCI6MTYzND<br>Y1MzEwNn0.fR3PrXf<br>jAGWD85YaXw9dmXS<br>vXcJ9dBtvnb2s<br>HsS9j_U"<br>토큰 헤더 추가하면<br> 로그인한 사용자의<br> 게시글별 좋아요<br> 상태 확인 가능<br>추가하지 않으면 <br>모든 게시글 좋아요<br> 상태 false 및 <br>username = "guest"|-|{<br>statusCode : 200<br>responseMessage: 게시글 조회 성공<br>page: page<br>totalPage: totalPage<br>username: username<br>userImageUrl: userImageUrl<br>posts:[{<br>postId: postId<br>content: content<br>imageUrl: imageUrl<br>createdAt: createdAt<br>firstName: firstName<br>lastName: lastName<br>likeCount: likeCount<br>commentCount: commentCount<br>isLiked: isLiked<br>comments: [{<br>commentId:commentId<br>content:content<br>userImageUrl: userImageUrl<br>createdAt: createdAt<br>userId: userId<br>firstName: firstName<br>lastName: lastName}]<br>}]<br>}|
|댓글삭제|DELETE|/comment/{commentId}<br>Header :<br> Authorization="Bearer <br>eyJhbGciOiJ<br>IUzI1NiJ9.eyJzdW<br>IiOiJyb2Nr<br>aW5d4cCI6MTY<br>NDY1MzEwNn0.f<br>R3PrXfjAGWD85Ya<br>Xw9dmXSvXcJ9d<br>Btvnb2sHsS9j_U"|-|{<br>statusCode : 200<br>responseMessage: 댓글 삭제 성공<br>postId: postId<br>}|
|댓글수정|PUT|/comment/{commentId}<br>Header :<br> Authorization="Bearer<br> eyJhbGciOiJIUzI1Ni<br>J9.eyJzdWIiOiJyb2NraW<br>5d4cCI6MTYzNDY1Mz<br>EwNn0.fR3PrXfjAGWD<br>85YaXw9dmXSvXc<br>J9dBtvnb2sHsS9j_U"|{<br>content: content<br>}|{<br>comment: {<br>commentId: commentId<br>content: content<br>createdAt: createdAt<br>userId: userId<br>userImageUrl: userImageUrl<br>firstName: firstName<br>lastName: lastName<br>},<br>postId: postId<br>responseMessage: 댓글 수정 성공<br>statusCode: 200<br>}|
|댓글작성|POST|/comment<br>Header : <br>Authorization="Bearer<br> eyJhbGciOiJIUzI1N<br>iJ9.eyJzdWIiOiJyb<br>2NraW5d4cCI6MTYzND<br>Y1MzEwNn0.fR3Pr<br>XfjAGWD85YaXw9dm<br>XSvXcJ9dBtvn<br>b2sHsS9j_U"|{<br>content: content<br>postId: postId<br>}|{<br>statusCode : 200<br>responseMessage: 댓글 생성 성공<br>comment: {<br>commentId:commentId<br>content:content<br>userImageUrl: userImageUrl<br>createdAt: createdAt<br>userId: userId<br>firstName: firstName<br>lastName: lastName}<br>}|
|좋아요 변경|POST|/post/{postId}/like<br>Header : <br>Authorization="Bearer<br> eyJhbGciOiJIUzI<br>1NiJ9.eyJzdWIiOiJyb<br>2NraW5d4cCI6MTYzNDY<br>1MzEwNn0.fR3PrXfj<br>AGWD85YaXw9dmXSvX<br>cJ9dBtvnb2sHsS9j_U"|-|{<br>isLiked: isLiked<br>statusCode : 200<br>responseMessage: 좋아요 변경 성공<br>}|



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

[YOUTUBE 영상](https://youtu.be/ZZ4QNsdwrVo) 