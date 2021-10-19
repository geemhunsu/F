import React from 'react';
import { Grid, Input, Text, Button, Image } from '../elements/index';
import { Dialog, DialogContent, DialogTitle, Select } from '@material-ui/core';
import styled from 'styled-components';
import { AiFillCloseCircle, AiFillCaretDown, AiOutlineSmile } from 'react-icons/ai';
import { FaUserFriends, FaUserTag, FaMicrophone } from 'react-icons/fa';
import writeTypeIcon from '../images/writetypeicon.png';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

const PostWriteModal = props => {
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
            <Text align='center' size='20px' bold='800' margin='-10px 0' justifyContent='center'>
              게시물 만들기
            </Text>
          </Grid>
        </Grid>
        <hr color='#eee' />
        <Grid padding='3px 10px 10px 10px'>
          <Grid display='flex' flexDirection='row'>
            <Image />
            <Grid display='flex' flexDirection='column'>
              <Text margin='0'>사용자</Text>
              <Button height='20px' padding='0px' fontSize='12px' margin='0px' width='75px' backgroundColor='#eee' color='#111' borderRadius='5px'>
                <FaUserFriends />
                친구만
                <AiFillCaretDown />
              </Button>
            </Grid>
          </Grid>
          <Grid width='450px'>
            <TextArea placeholder='사용자 님, 무슨 생각을 하고 계신가요?'></TextArea>
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
        <Button backgroundColor='#F1F4F6' color='#ddd' text='게시' borderRadius='5px' />
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

const TextArea = styled.textarea`
  height: 140px;
  padding: 5px;
  width: 450px;
  border: none;
  outline: none;
  word-spacing: -0.2em;
  resize: none;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default PostWriteModal;
