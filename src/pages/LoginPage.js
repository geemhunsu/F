import React, { useState } from 'react';
import { Grid, Text, Input, Button, Image } from '../elements/index';
import LogInModal from '../components/SignUpModal';
import { useDispatch } from 'react-redux';
import { history } from '../redux/ConfigureStore';
import { userCreators } from '../redux/modules/user';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const RegExUserId = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const [showModal, setShowModal] = useState(false);
  const modalOpen = () => {
    setShowModal(true);
  };

  const login = () => {
    if (userId === '' || password === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요');
    }

    const loginInfo = {
      userId: userId,
      password: password,
    };
    console.log(loginInfo);
    dispatch(userCreators.loginMiddleware(loginInfo));
  };

  return (
    <>
      <Grid display='block' width='100%' height='100%' fontSize='12px' backgroundColor='#fff' color='#1c1e21' lineHeight='normal'>
        <Grid className='상단랩' display='flex' width='100%' height='75%' justifyContent='center' backgroundColor='#f0f2f5'>
          <Grid display='flex' padding='150px 0 150px 0' flexDirection='row' width='960px'>
            <Grid className='좌측타이틀' boxSizing='border-box;' width='400px' margin='100px 0px 0 0' padding='0 32px 0 0' textAlign='left' itemAlign='left'>
              <Image shape='TitleLogo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'></Image>
              <Text margin='-20px'>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</Text>
            </Grid>
            <Grid display='flex' flexDirection='column' textAlign='center' margin='0px 50px' width='400px'>
              <Grid backgroundColor='#ffff' padding='20px' textAlign='center' borderRadius='8px' margin='auto'>
                <Input
                  height='50px'
                  padding='14px 16px'
                  border='1px solid #ddd'
                  margin='10px 0'
                  borderRadius='5px'
                  placeholder='이메일 또는 전화번호'
                  _onchange={e => {
                    console.log(e.target.value);
                    setUserId(e.target.value);
                  }}
                />
                <Input
                  height='50px'
                  padding='14px 16px'
                  border='1px solid #ddd'
                  margin='10px 0'
                  borderRadius='5px'
                  placeholder='비밀번호'
                  type='password'
                  _onChange={e => {
                    console.log(e.target.value);
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  margin='10px 0'
                  fontSize='22px'
                  borderRadius='5px'
                  backgroundColor='#1877F2'
                  _onClick={() => {
                    login();
                  }}
                >
                  로그인
                </Button>
                <Text color='#1877f2'>비밀번호를 잊으셨나요?</Text>
                <hr />
                <Button text='새 계정 만들기' _onClick={modalOpen} width='40%' margin='20px' backgroundColor='#42b72a' />
                <LogInModal showModal={showModal} setShowModal={setShowModal} />
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

export default LoginPage;
