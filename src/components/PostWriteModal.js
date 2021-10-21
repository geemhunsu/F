import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postCreators } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';
import { userCreators } from '../redux/modules/user';
import AWS from 'aws-sdk';

import { Grid, Input, Text, Button, Image } from '../elements/index';
import { Dialog } from '@material-ui/core';

import { AiFillCloseCircle, AiFillCaretDown, AiOutlineSmile } from 'react-icons/ai';
import { FaUserFriends, FaUserTag, FaMicrophone } from 'react-icons/fa';
import writeTypeIcon from '../images/writetypeicon.png';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { PostImageUpload } from '.';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

const PostWriteModal = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const postPreview = useSelector(state => state.image.postPreview);
  const [content, setContent] = React.useState();
  const [labelDisplay, setLabelDisplay] = React.useState('block');
  const [previewDisplay, setPreviewDisplay] = React.useState('none');
  const imgUrl = useSelector(state => state.image.previewFullName);

  const selectFile = e => {
    const fileName = e.target.files[0].name.split('.')[0];
    const fileType = e.target.files[0].name.split('.')[1];
    const fileFullName = e.target.files[0].name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPostPreview({ preview: reader.result, fileName, fileType, fileFullName, file }));
    };
    console.log('사진 변경');

    setLabelDisplay('none');
    setPreviewDisplay('block');
  };

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:3be6a8f1-b813-418a-914b-0707888dcbdc',
    }),
  });

  const addPost = () => {
    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'hanghae-miniproject-team2-imagebucket',
        Key: `${postPreview.fileName}.${postPreview.fileType}`,
        Body: postPreview.file,
        ACL: 'public-read',
      },
    });
    const promise = awsUpload.promise();
    promise
      .then(data => {})
      .catch(err => {
        window.alert('업로드 실패');
      })
      .then(data => {
        const postInfo = {
          content: content,
          imageUrl: `https://hanghae-miniproject-team2-imagebucket.s3.ap-northeast-2.amazonaws.com/${postPreview.fileFullName}`,
        };
        dispatch(postCreators.addPostMiddleware(postInfo));
        setLabelDisplay('block');
        setPreviewDisplay('none');
      });
  };

  const previewDelete = () => {
    setLabelDisplay('block');
    setPreviewDisplay('none');
  };

  //모달
  const { openModal, setModal } = props;
  const modalClose = () => {
    setModal(false);
  };

  return (
    <Dialog maxWidth={'lg'} scroll='paper' open={openModal}>
      <ModalWrap>
        <Grid padding='20px 0'>
          <Grid alignItems='center' position='relative'>
            <Grid position='absolute' top='-10px' right='20px' color='black' width='20px' padding='10px'>
              <AiFillCloseCircle size='30' color='#ddd' onClick={modalClose} />
            </Grid>
            <Text align='center' size='20px' bold='800' margin='-10px 0'>
              게시물 만들기
            </Text>
          </Grid>
        </Grid>
        <hr color='#eee' />
        <Grid padding='3px 10px 10px 10px'>
          <Grid display='flex' flexDirection='row'>
            <Image src={userInfo.imageUrl} />
            <Grid display='flex' flexDirection='column' margin='0 5px'>
              <Text margin='0'>{userInfo.firstName ? userInfo.firstName + userInfo.lastName : 'GUEST'}</Text>
              <Button height='20px' padding='0px' fontSize='12px' margin='0px' width='75px' backgroundColor='#eee' color='#111' borderRadius='5px'>
                <FaUserFriends />
                친구만
                <AiFillCaretDown />
              </Button>
            </Grid>
          </Grid>
          <Grid width='450px'>
            <TextArea
              placeholder='무슨 생각을 하고 계신가요?'
              onChange={e => {
                console.log(e.target.value);
                setContent(e.target.value);
              }}
            />
          </Grid>
          <Grid width='100%' margin='0 -10px'>
            <Grid>
              <Wrap>
                <label htmlFor='postFileInput' id='inputLabel' style={{ display: labelDisplay }}>
                  <Grid display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                    <Grid width='40px' height='40px' bg='#e4e6eb' borderRadius='20px' margin='0 0 8px 0' display='flex' alignItems='center' justifyContent='center'>
                      <ElI />
                    </Grid>
                    게시물 사진 등록
                  </Grid>
                </label>
                <Grid height='auto' position='relative' display={previewDisplay} id='postPreviewBox'>
                  <Image src={postPreview?.preview} shape='square' margin='0 0 5px 0' backgroundPosition='center' />
                  <label htmlFor='postFileInput' id='inputLabelButton'>
                    <Grid display='flex' alignItems='center' justifyContent='center' hover='#e1e2e7' bg='white' borderRadius='5px' width='auto' padding='5px 10px'>
                      <EditIcon />
                      <Text bold margin='0' size='0.9rem'>
                        사진 변경
                      </Text>
                    </Grid>
                  </label>
                  {/* <Grid
                    display='none'
                    position='absolute'
                    top='10px'
                    left='45%'
                    hover='#e1e2e7'
                    bg='white'
                    width='auto'
                    height='auto'
                    padding='5px 10px'
                    borderRadius='5px'
                    alignItems='center'
                    id='submitImage'
                    _onClick={uploadToAws}
                  >
                    <IconContext.Provider value={{ color: 'black', size: '16' }}>
                      <FaCheck />
                    </IconContext.Provider>
                    <Text bold margin='0' size='0.9rem' margin='0 0 0 5px'>
                      수정하기
                    </Text>
                  </Grid> */}
                  <Grid
                    display='none'
                    position='absolute'
                    top='10px'
                    right='5%'
                    hover='#e1e2e7'
                    bg='white'
                    width='auto'
                    height='auto'
                    padding='5px 10px'
                    borderRadius='5px'
                    alignItems='center'
                    id='deletePreview'
                    _onClick={previewDelete}
                  >
                    <IconContext.Provider value={{ color: 'black', size: '20' }}>
                      <MdOutlineCancel />
                    </IconContext.Provider>
                  </Grid>
                </Grid>
                <input type='file' id='postFileInput' onChange={selectFile} />
              </Wrap>
            </Grid>
          </Grid>
          <Grid width='450px' display='flex' justifyContent='space-between' alignItems='center'>
            <Image src={writeTypeIcon} />
            <AiOutlineSmile size='30' />
          </Grid>
        </Grid>
        <Grid display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' borderRadius='5px' border='1px solid #eee'>
          <Text width='30%' padding='12px' bold>
            게시물에 추가
          </Text>
          <Grid width='300px' display='flex' justifyContent='flex-end' padding='0 20px 0 0'>
            <IoMdPhotos size='30' color='#45bd62' />
            <FaUserTag size='30' color='#1877f2' />
            <AiOutlineSmile size='30' color='#f7bd34' />
            <HiLocationMarker size='30' color='#f5533d' />
            <FaMicrophone size='30' color='#bbbbbb' />
            <IoEllipsisHorizontalSharp size='30' color='#676e76' />
          </Grid>
        </Grid>
        <Button
          _onClick={() => {
            addPost();
          }}
          margin='15px 0 5px 0'
          backgroundColor='#1877f2'
          color='#fff'
          text='게시'
          fontSize='15px'
          borderRadius='5px'
        />
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
  padding: 10px;
`;

const TextArea = styled.textarea`
  height: 140px;
  margin: 10px;
  width: 450px;
  border: none;
  outline: none;
  word-spacing: -0.4em;
  resize: none;
  overflow: auto;
  place ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  #inputLabel {
    width: calc(100% - 30px);
    height: 200px;
    padding: 15px;
    border-radius: 8px;
    background-color: #f7f8fa;
    font-size: 0.875rem;
    text-align: center;

    :hover {
      display: block;
      cursor: pointer;
      background-color: #dee0e4;
    }
  }

  #postPreviewBox {
    :hover::after {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    :hover #inputLabelButton {
      display: block;
      z-index: 1;
    }
    :hover #submitImage {
      display: flex;
      z-index: 1;
    }
    :hover #deletePreview {
      display: flex;
      z-index: 1;
    }
  }

  #inputLabelButton {
    display: none;
    position: absolute;
    top: 10px;
    left: 5%;
  }

  input {
    display: none;
  }
`;

const ElI = styled.i`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/qlH1TETMDjS.png');
  background-position: 0px -408px;
  background-size: auto;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const EditIcon = styled.i`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ttTXZ6XJuCZ.png');
  background-position: -119px -149px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 5px;
`;

export default PostWriteModal;
