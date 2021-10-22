import React from 'react';
import { Grid, Image, Text, Button, Input } from '../elements/index';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteModal } from '.';
import PostWriteModal from './PostWriteModal';
import { postCreators } from '../redux/modules/post';

import { AiOutlineLike, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { FaRegCommentDots } from 'react-icons/fa';
import { VscRunAll, VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

const Post = () => {
  const inputs = React.useRef([]);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user?.userList);
  const loginInfo = useSelector((state) => state.user.userId);
  const userImageUrl = useSelector((state) => state.user.imageUrl);
  const is_me = useSelector((state) => state.user.userId);
  React.useEffect(() => {
    dispatch(postCreators.getPostMiddleware());
  }, []);
  const postList = useSelector((state) => state.post?.postList);
  const [shownComments, setShownComments] = React.useState({});
  const toggleComment = (id) => {
    setShownComments((prevShownComments) => ({
      ...prevShownComments,
      [id]: !prevShownComments[id],
    }));
  };

  const [shownModal, setShownModal] = React.useState({});
  const toggleDelete = (id) => {
    setShownModal((prevShownModals) => ({
      ...prevShownModals,
      [id]: !prevShownModals[id],
    }));
  };

  const [shownCommentModal, setShownCommentModal] = React.useState({});
  const toggleCommentDelete = (id) => {
    setShownCommentModal((prevShownCommentModals) => ({
      ...prevShownCommentModals,
      [id]: !prevShownCommentModals[id],
    }));
  };

  const [editComment, setEditComment] = React.useState({});
  const toggleEditComment = (id) => {
    setEditComment((prevComments) => ({
      ...prevComments,
      [id]: !prevComments[id],
    }));
  };

  const [comment, setComment] = React.useState('');

  const [openModal, setModal] = React.useState(false);
  const modalOpen = (postId) => {
    dispatch(postCreators.setDetailPostId(postId));
    setTimeout(setModal(true), 5000);
  };

  return (
    <React.Fragment>
      <PostWriteModal openModal={openModal} setModal={setModal} />
      {postList.map((val, idx) => {
        return (
          <div key={val.postId}>
            <PostWrapper>
              <Grid
                width='95%'
                height='50px'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                padding='20px 10px'
              >
                <Image
                  shape='circle'
                  src={
                    val.userImageUrl
                    // userList.find(user => user.userId === val.userId).imageUrl
                  }
                />
                <Grid width='70%' height='100%'>
                  <Text margin='5px 0px 0px 0px' bold>
                    {`${val.lastName}  ${val.firstName}`}
                  </Text>
                  <Text margin='0px 5px' size='12px'>
                    {val.createdAt.split('T')[0]}
                  </Text>
                </Grid>
                <Grid display='flex' justifyContent='flex-end' width='100%'>
                  <Button
                    width='30px'
                    height='30px'
                    padding='0px'
                    borderRadius='50%'
                    backgroundColor='white'
                    margin='5px'
                    hover='whitesmoke'
                    display={is_me === val.userId ? 'inline' : 'none'}
                    _onClick={() => {
                      modalOpen(val.postId);
                      console.log(val.userId);
                      console.log(Array.isArray(userList));
                    }}
                  >
                    <AiFillEdit color='black' />
                  </Button>
                  <Button
                    width='30px'
                    height='30px'
                    padding='0px'
                    borderRadius='50%'
                    backgroundColor='white'
                    margin='5px'
                    hover='whitesmoke'
                    display={is_me === val.userId ? 'inline' : 'none'}
                    _onClick={() => {
                      toggleDelete(idx);
                    }}
                  >
                    <AiFillDelete color='black' />
                  </Button>
                </Grid>
              </Grid>
              <Grid width='100%' margin='0px'>
                <Text margin='0px 0px 0px 10px'>{val.content}</Text>
                {val.imageUrl ? (
                  <Image shape='square' src={val.imageUrl} />
                ) : null}
              </Grid>
              <Grid
                width='95%'
                height='40px'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                padding='0px 10px'
              >
                <BtnWrapper>
                  <Button
                    width='30px'
                    height='30px'
                    padding='0px'
                    backgroundColor='white'
                    _onClick={() => {
                      dispatch(postCreators.clickLikeMiddleware(val.postId));
                    }}
                  >
                    👍
                  </Button>
                  <span
                    style={{
                      paddingTop: '3px',
                    }}
                  >
                    {val.likeCount}
                  </span>
                </BtnWrapper>
                <Grid display='flex' justifyContent='flex-end'>
                  <Text margin='10px'>좋아요 {val.likeCount}개</Text>
                  <Text margin='10px'>댓글 {val.commentCount}개</Text>
                </Grid>
              </Grid>
              <Line />
              <Grid
                width='100%'
                height='40px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                padding='0px'
              >
                {val.liked ? (
                  <Button
                    // width='25%'
                    width='30%'
                    height='40px'
                    margin='5px'
                    backgroundColor='white'
                    color='blue'
                    padding='0px'
                    margin='0px'
                    borderRadius='5px'
                    hover='whitesmoke'
                    fontSize='0.93rem'
                    _onClick={() => {
                      dispatch(postCreators.clickLikeMiddleware(val.postId));
                    }}
                  >
                    <AiOutlineLike color='blue' />
                    좋아요
                  </Button>
                ) : (
                  <Button
                    // width='25%'
                    width='30%'
                    height='40px'
                    margin='5px'
                    backgroundColor='white'
                    color='gray'
                    padding='0px'
                    margin='0px'
                    borderRadius='5px'
                    hover='whitesmoke'
                    fontSize='0.93rem'
                    _onClick={() => {
                      dispatch(postCreators.clickLikeMiddleware(val.postId));
                    }}
                  >
                    <AiOutlineLike color='gray' />
                    좋아요
                  </Button>
                )}
                <Button
                  // width='25%'
                  width='30%'
                  height='40px'
                  margin='5px'
                  backgroundColor='white'
                  color='gray'
                  padding='0px'
                  margin='0px'
                  borderRadius='5px'
                  hover='whitesmoke'
                  fontSize='0.93rem'
                  _onClick={() => {
                    inputs.current[idx].focus();
                    console.log(val.postId);
                  }}
                >
                  <FaRegCommentDots color='gray' />
                  댓글달기
                </Button>
                <Button
                  // width='25%'
                  width='30%'
                  height='40px'
                  margin='5px'
                  backgroundColor='white'
                  color='gray'
                  padding='0px'
                  margin='0px'
                  borderRadius='5px'
                  hover='whitesmoke'
                  fontSize='0.93rem'
                  _onClick={() => {
                    // 흐름 1.
                    if (!document.queryCommandSupported('copy')) {
                      return alert('복사하기가 지원되지 않는 브라우저입니다.');
                    }

                    // 흐름 2.
                    const textarea = document.createElement('textarea');
                    textarea.value = window.location.href;
                    textarea.style.top = 0;
                    textarea.style.left = 0;
                    textarea.style.position = 'fixed';

                    // 흐름 3.
                    document.body.appendChild(textarea);
                    // focus() -> 사파리 브라우저 서포팅
                    textarea.focus();
                    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
                    textarea.select();
                    // 흐름 4.
                    document.execCommand('copy');
                    // 흐름 5.
                    document.body.removeChild(textarea);
                    alert('클립보드에 복사되었습니다.');
                  }}
                >
                  <RiShareForwardLine color='gray' />
                  공유하기
                </Button>
              </Grid>
              <Line />
              <Grid
                width='100%'
                justifyContent='space-evenly'
                alignItems='center'
              >
                <Grid
                  width='95%'
                  height='30px'
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  padding='0px 10px'
                >
                  <Text margin='5px'>댓글 {val.commentCount}개</Text>
                  <Text
                    margin='5px'
                    _onClick={() => {
                      toggleComment(idx);
                    }}
                    cursor='pointer'
                  >
                    {shownComments[idx] && val.comments.length !== 0 ? (
                      <div>
                        댓글 숨기기
                        <VscTriangleUp />
                      </div>
                    ) : (
                      <div>
                        모든 댓글
                        <VscTriangleDown />
                      </div>
                    )}
                  </Text>
                </Grid>
                {shownComments[idx] ? (
                  postList[idx].comments.map((val, idx) => {
                    return (
                      <div key={val.postId + val.createdAt}>
                        {/* {console.log(loginInfo, val.userId, editComment[idx])} */}
                        {loginInfo === val.userId && editComment[idx] ? (
                          <Grid
                            width='90%'
                            margin='auto'
                            display='flex'
                            alignItems='center'
                            padding='0px 10px'
                          >
                            <Image
                              shape='circle'
                              margin='10px'
                              src={val.userImageUrl}
                            />
                            <Grid display='flex' flexDirection='column'>
                              <Input
                                width='78%'
                                height='30px'
                                bg='whitesmoke'
                                border='none'
                                borderRadius='10px'
                                edit
                                placeholder={val.content}
                                innerRef={(input) =>
                                  (inputs.current[idx] = input)
                                }
                                _onChange={(e) => {
                                  // console.log(e.target.value);
                                  setComment(e.target.value);
                                }}
                                onSubmit={() => {
                                  console.log('onSubmit');
                                  if (comment === '') {
                                    return;
                                  }
                                  setComment('');
                                  console.log(val.commentId, comment);
                                  const commentInfo = {
                                    content: comment,
                                  };
                                  dispatch(
                                    postCreators.editCommentMiddleware(
                                      val.commentId,
                                      commentInfo
                                    )
                                  );

                                  inputs.current[idx].value = '';
                                  toggleEditComment(idx);
                                }}
                              />
                              <Text
                                size='10px'
                                color='dodgerblue'
                                cursor='pointer'
                                _onClick={() => {
                                  toggleEditComment(idx);
                                }}
                              >
                                취소
                              </Text>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            width='90%'
                            display='flex'
                            alignItems='center'
                            padding='0px 10px'
                            margin='auto'
                            justifyContent='space-between'
                          >
                            <Image
                              shape='circle'
                              margin='10px'
                              src={val.userImageUrl}
                            />
                            <Grid
                              width='70%'
                              height='40px'
                              margin='10px 0px 0px 0px'
                              bg='whitesmoke'
                              borderRadius='10px'
                              padding='5px'
                              display='flex'
                              flexDirection='column'
                            >
                              <Text bold size='14px'>
                                {val.lastName + val.firstName}
                              </Text>
                              {val.content}
                            </Grid>
                            <Grid
                              display='flex'
                              justifyContent='center'
                              width='20%'
                            >
                              <Button
                                display={
                                  val.userId === is_me ? 'block' : 'none'
                                }
                                width='30px'
                                height='30px'
                                padding='0px'
                                borderRadius='50%'
                                backgroundColor='white'
                                margin='5px'
                                hover='whitesmoke'
                                _onClick={() => {
                                  if (loginInfo !== val.userId) {
                                    return alert('권한이 없습니다.');
                                  }
                                  // console.log(loginInfo, val.userId)
                                  toggleEditComment(idx);
                                }}
                              >
                                <AiFillEdit color='black' display='inline' />
                              </Button>
                              <Button
                                display={
                                  val.userId === is_me ? 'block' : 'none'
                                }
                                width='30px'
                                height='30px'
                                padding='0px'
                                borderRadius='50%'
                                backgroundColor='white'
                                margin='5px'
                                hover='whitesmoke'
                                _onClick={() => {
                                  toggleCommentDelete(idx);
                                }}
                              >
                                <AiFillDelete color='black' display='inline' />
                              </Button>
                            </Grid>
                          </Grid>
                        )}
                        {shownCommentModal[idx] && (
                          <DeleteModal
                            onClose={() => {
                              toggleCommentDelete(idx);
                            }}
                            commentId={val.commentId}
                            type='comment'
                          />
                        )}
                      </div>
                    );
                  })
                ) : postList[idx].comments.length !== 0 ? (
                  <Grid
                    width='90%'
                    display='flex'
                    alignItems='center'
                    margin='auto'
                    padding='0px 10px'
                  >
                    <Image
                      shape='circle'
                      margin='10px'
                      src={
                        postList[idx].comments[
                          postList[idx].comments.length - 1
                        ].userImageUrl
                      }
                    />
                    <Grid
                      width='68%'
                      height='40px'
                      margin='10px 0px 0px 0px'
                      bg='whitesmoke'
                      borderRadius='10px'
                      padding='5px'
                      display='flex'
                      flexDirection='column'
                    >
                      <Text bold size='14px'>
                        {postList[idx].comments[
                          postList[idx].comments.length - 1
                        ].lastName +
                          postList[idx].comments[
                            postList[idx].comments.length - 1
                          ].firstName}
                      </Text>
                      {
                        postList[idx].comments[
                          postList[idx].comments.length - 1
                        ].content
                      }
                    </Grid>
                    {shownCommentModal[idx] && (
                      <DeleteModal
                        onClose={() => {
                          toggleCommentDelete(idx);
                        }}
                        commentId={
                          postList[idx].comments[
                            postList[idx].comments.length - 1
                          ].commentId
                        }
                        type='comment'
                      />
                    )}
                  </Grid>
                ) : null}
                <Grid
                  width='90%'
                  display='flex'
                  alignItems='center'
                  padding='0px 10px'
                  margin='auto'
                >
                  {loginInfo !== null ? (
                    <Image shape='circle' margin='10px' src={userImageUrl} />
                  ) : (
                    <Image shape='circle' margin='10px' />
                  )}
                  <Grid display='flex' flexDirection='column'>
                    <Input
                      width='78%'
                      height='30px'
                      bg='whitesmoke'
                      border='none'
                      borderRadius='10px'
                      innerRef={(input) => (inputs.current[idx] = input)}
                      _onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      onSubmit={() => {
                        console.log('onSubmit');
                        if (comment === '') {
                          return;
                        }
                        setComment('');
                        const commentInfo = {
                          postId: val.postId,
                          content: comment,
                        };
                        dispatch(
                          postCreators.addCommentMiddleware(commentInfo)
                        );
                        inputs.current[idx].value = '';
                      }}
                    />
                    <Text size='10px'>글을 게시하려면 Enter키를 누르세요.</Text>
                  </Grid>
                </Grid>
              </Grid>
            </PostWrapper>
            {shownModal[idx] && (
              <DeleteModal
                onClose={() => {
                  toggleDelete(idx);
                }}
                postId={val.postId}
              />
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const Line = styled.hr`
  margin: 1px 4%;
  width: 92%;
  background-color: whitesmoke;
`;

const BtnWrapper = styled.div`
  display: flex;
  vertical-align: middle;
`;

const PostWrapper = styled.div`
  width: 595px;
  height: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  @media screen and (max-width: 595px) {
    width: 100%;
  } ;
`;

export default Post;
