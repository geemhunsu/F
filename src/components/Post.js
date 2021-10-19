import React from 'react';
import { Grid, Image, Text, Button, Input } from '../elements/index';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { VscTriangleDown } from 'react-icons/vsc';

const Post = () => {
  return (
    <React.Fragment>
      <Grid width='595px' height='100%' margin='20px auto' display='flex' flexDirection='column' borderRadius='10px' bg='white' boxShadow='rgba(0, 0, 0, 0.2) 0px 2px 3px;'>
        <Grid width='575px' height='50px' display='flex' justifyContent='space-between' alignItems='center' padding='0px 10px'>
          <Image shape='circle' />
          <Grid width='100%' height='100%'>
            <Text margin='5px 0px 0px 0px' bold>
              어쩌구저쩌구
            </Text>
            <Text margin='0px 5px' size='12px'>
              저쩌구 어쩌구
            </Text>
          </Grid>
          <Button width='30px' height='30px' padding='0px' borderRadius='50%' backgroundColor='white'>
            <BsThreeDots color='black' display='inline' />
          </Button>
        </Grid>
        <Grid width='100%' margin='0px'>
          <Image shape='square' />
        </Grid>
        <Grid width='575px' height='40px' display='flex' justifyContent='space-between' alignItems='center' padding='0px 10px'>
          <BtnWrapper>
            <Button width='30px' height='30px' padding='0px' backgroundColor='white'>
              👍
            </Button>
            <p>2</p>
          </BtnWrapper>
          <Grid display='flex' justifyContent='flex-end'>
            <Text margin='10px'>좋아요 2개</Text>
            <Text margin='10px'>댓글 6개</Text>
          </Grid>
        </Grid>
        <Line />
        <Grid width='575px' height='40px' display='flex' justifyContent='space-evenly' alignItems='center' padding='0px 10px'>
          <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
            <AiOutlineLike color='black' />
            좋아요
          </Button>
          <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
            <FaRegCommentDots color='black' />
            댓글달기
          </Button>
          <Button width='30%' height='40px' margin='5px' backgroundColor='white' color='black' padding='0px' margin='0px'>
            <RiShareForwardLine color='black' />
            공유하기
          </Button>
        </Grid>
        <Line />
        <Grid width='595px' justifyContent='space-evenly' alignItems='center'>
          <Grid width='575px' height='30px' display='flex' justifyContent='space-between' alignItems='center' padding='0px 10px'>
            <Text margin='5px'>댓글 1개 더 보기</Text>
            <Text margin='5px'>
              모든 댓글
              <VscTriangleDown />
            </Text>
          </Grid>
          <Grid width='575px' display='flex' alignItems='center' padding='0px 10px'>
            <Image shape='circle' margin='10px' />
            <Grid width='400px' height='40px' margin='10px 0px 0px 0px' bg='whitesmoke' borderRadius='10px' padding='5px'>
              댓글을 달아봅시다
            </Grid>
          </Grid>
          <Grid width='575px' display='flex' alignItems='center' padding='0px 10px'>
            <Image shape='circle' margin='10px' />
            <Input width='500px' height='30px' bg='whitesmoke' border='none' borderRadius='10px' />
          </Grid>
        </Grid>
      </Grid>
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

export default Post;
