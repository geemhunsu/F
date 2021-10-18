import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../images/facebooklogo.png';
import { Grid, Text, Input, Button, Image } from '../elements/index';
import Modal from '../components/Modal';

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalOpen = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    console.log('close');
    setShowModal(false);
  };
  return (
    <>
      <Grid className='백그라운드' display='block' width='100%' height='100%' fontSize='12px' backgroundColor='#fff' color='#1c1e21' lineHeight='normal'>
        <Grid className='상단랩' display='flex' width='100%' height='75%' justifyContent='center' backgroundColor='#f0f2f5'>
          <Grid display='flex' padding='150px 0 150px 0' flexDirection='row' width='960px'>
            <Grid className='좌측타이틀' boxSizing='border-box;' width='400px' margin='100px 0px 0 0' padding='0 32px 0 0' textAlign='left' itemAlign='left'>
              <Image shape='TitleLogo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'></Image>
              <Text margin='-20px'>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</Text>
            </Grid>
            <Grid display='flex' flexDirection='column' textAlign='center' margin='0px 50px' width='400px'>
              <Grid backgroundColor='#ffff' padding='20px' textAlign='center' borderRadius='8px' margin='auto'>
                <Input borderRadius='5px' placeholder='이메일 또는 전화번호' />
                <Input placeholder='비밀번호' />
                <Button backgroundColor='#1877F2'>로그인</Button>
                <Text color='#1877f2'>비밀번호를 잊으셨나요?</Text>
                <hr />
                <Button _onClick={modalOpen} width='40%' margin='20px' backgroundColor='#42b72a'>
                  새 계정 만들기
                </Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
              </Grid>
              <Text textAlign='center' itemAlign='center'>
                유명인, 밴드, 비즈니스를 위한 <b>페이지 만들기</b>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid textAlign='center' width='60%' margin='auto'>
        <Grid height='20%' backgroundColor='#fff' minWidth='60%' margin='auto' padding='20px'>
          <Text>한국어 English (US) Tiếng Việt Bahasa Indonesia ภาษาไทย Español 中文(简体) 日本語 Português (Brasil) Français (France) Deutsch</Text>
          <hr />
          <Text>
            가입하기 로그인 Messenger Facebook LiteWatch 사람 페이지 페이지 카테고리 장소 게임 위치 Marketplace Facebook Pay 그룹 채용 정보 Oculus Portal Instagram 지역 기부 캠페인 서비스 투표 정보
            센터 정보 광고 만들기 페이지 만들기 개발자 채용 정보 개인정보처리방침 쿠키 AdChoices 이용 약관 고객 센터 설정활동 로그
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

const LoginBackground = styled.div`
  background-color: #eff2f5;
`;

const Loginlogo = styled.div`
  object-fit: contain;
  height: 250px;
  padding: 200px 0px 0px 100px;
`;

const Title = styled.h2`
  width: 600px;
  padding: 20px 0px 0px 100px;
  font-size: 27px;
  font-weight: 550;
  line-height: 0.8cm;
`;

export default LoginPage;
