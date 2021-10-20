import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Image, Button, Text } from '../elements/index';
import PostWriteModal from './PostWriteModal';
import { FaVideo } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';

const PostWrite = () => {
  const [openModal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(true);
  };
  return (
    <>
      <PostWriteWrapper>
        <Grid>
          <Grid display='flex' flexDirection='row' alignItems='center' margin='10px' padding='0 30px 0 0'>
            <Image />
            <Button width='520px' backgroundColor='#ddd' color='#111' borderRadius='30px' _onClick={modalOpen}>
              누구님, 무슨 생각을 하고 계신가요?
            </Button>
            <PostWriteModal openModal={openModal} setModal={setModal} />
          </Grid>
        </Grid>
        <Grid>
          <Grid width='100%' height='40px' display='flex' justifyContent='space-evenly' alignItems='center' padding='0px 10px'>
            <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
              <FaVideo color='#f0284a' />
              라이브방송
            </Button>
            <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
              <MdPhotoLibrary color='#45bd62' />
              사진/동영상
            </Button>
            <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
              <BsEmojiSmileFill color='#f7b928' />
              기분/활동
            </Button>
          </Grid>
        </Grid>
      </PostWriteWrapper>
    </>
  );
};

const PostWriteWrapper = styled.div`
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
  }
  overflow: hidden;
`;

export default PostWrite;
