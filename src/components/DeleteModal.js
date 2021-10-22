import React from 'react';
import styled from 'styled-components';

import { postCreators } from '../redux/modules/post';
import { useDispatch } from 'react-redux';
import { Grid, Text, Button } from '../elements';
import { useLockBodyScroll } from '../shared/ScrollLock';

const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const [lock, setLock] = React.useState(true);

  const { onClose, postId, commentId, type } = props;

  // function useLockBodyScroll() {
  //   React.useLayoutEffect(() => {
  //     // Get original body overflow
  //     const originalStyle = window.getComputedStyle(document.body).overflow;
  //     // Prevent scrolling on mount
  //     document.body.style.overflow = 'hidden';
  //     // Re-enable scrolling when component unmounts
  //     return () => (document.body.style.overflow = originalStyle);
  //   }, []); // Empty array ensures effect is only run on mount and unmount
  // }

  // useLockBodyScroll();

  useLockBodyScroll('hidden');

  console.log(type);

  if (type === 'comment') {
    return (
      <React.Fragment>
        <ModalBg onClick={onClose}>
          <ModalWrapper
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Grid display='flex' justifyContent='space-between'>
              <Text size='20px' margin='0px'>
                삭제하시겠어요?
              </Text>
              <Button
                width='35px'
                height='35px'
                margin='0px'
                _onClick={onClose}
                padding='0px'
                borderRadius='50%'
                backgroundColor='whitesmoke'
                color='dimgray'
                hover='lightgray'
                fontSize='0.93rem'
              >
                ✖
              </Button>
            </Grid>
            <ButtonWrapper>
              <Button
                width='55px'
                height='36px'
                margin='0px 5px'
                padding='0px'
                backgroundColor='white'
                borderRadius='5px'
                color='dodgerblue'
                hover='whitesmoke'
                fontSize='0.93rem'
                _onClick={onClose}
              >
                취소
              </Button>
              <Button
                width='55px'
                height='36px'
                margin='0px 5px'
                padding='0px'
                backgroundColor='dodgerblue'
                borderRadius='5px'
                color='white'
                hover='cornflowerblue'
                fontSize='0.93rem'
                _onClick={() => {
                  console.log(commentId);
                  dispatch(postCreators.deleteCommentMiddleware(commentId));
                  setLock(false);
                  onClose();
                }}
              >
                확인
              </Button>
            </ButtonWrapper>
          </ModalWrapper>
        </ModalBg>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ModalBg onClick={onClose}>
        <ModalWrapper
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Grid display='flex' justifyContent='space-between'>
            <Text size='20px' margin='0px'>
              삭제하시겠어요?
            </Text>
            <Button
              width='35px'
              height='35px'
              margin='0px'
              _onClick={onClose}
              padding='0px'
              borderRadius='50%'
              backgroundColor='whitesmoke'
              color='dimgray'
              hover='lightgray'
              fontSize='0.93rem'
            >
              ✖
            </Button>
          </Grid>
          <ButtonWrapper>
            <Button
              width='55px'
              height='36px'
              margin='0px 5px'
              padding='0px'
              backgroundColor='white'
              borderRadius='5px'
              color='dodgerblue'
              hover='whitesmoke'
              fontSize='0.93rem'
              _onClick={onClose}
            >
              취소
            </Button>
            <Button
              width='55px'
              height='36px'
              margin='0px 5px'
              padding='0px'
              backgroundColor='dodgerblue'
              borderRadius='5px'
              color='white'
              hover='cornflowerblue'
              fontSize='0.93rem'
              _onClick={() => {
                console.log(postId);
                dispatch(postCreators.deletePostMiddleware(postId));
                setLock(false);
                onClose();
              }}
            >
              확인
            </Button>
          </ButtonWrapper>
        </ModalWrapper>
      </ModalBg>
    </React.Fragment>
  );
};

const ModalBg = styled.div`
  background-color: rgba(243, 243, 244, 0.6);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const ModalWrapper = styled.div`
  width: 550px;
  height: 180px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 60px 5px;
  padding: 18px;
  position: relative;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
`;

export default DeleteModal;
