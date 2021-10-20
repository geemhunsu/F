import React from 'react';
import { Grid, Input, Text, Button, Image } from '../elements/index';
import { Dialog } from '@material-ui/core';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';
import styled from 'styled-components';
import question from '../images/question.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SignUpModal = props => {
  const dispatch = useDispatch();

  const [firstName, setfirstName] = React.useState();
  const [lastName, setlastName] = React.useState();
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };
  const signUp = () => {
    const signupInfo = {
      firstName: firstName,
      lastName: lastName,
      userId: userId,
      password: password,
    };
    console.log(signupInfo);
    dispatch(userCreators.signupMiddleware(signupInfo));
  };

  return (
    <Dialog maxWidth={'lg'} scroll='paper' open={showModal}>
      <ModalWrap>
        <Grid className='모달컨테이너' backgroundColor='#fff' borderRadius='0 0 5px 5px' position='relative' width='100%' height='100%'>
          <Grid padding='20px 0'>
            <Grid alignItems='center' position='relative'>
              <Grid position='absolute' top='-10px' right='20px' color='black' width='20px' padding='10px'>
                <AiFillCloseCircle size='30' color='#ddd' onClick={modalClose} />
              </Grid>
              <Text padding='0 0 5px 20px' size='40px' bold='800' margin='-10px 0' justifyContent='center'>
                가입하기
              </Text>
              <Text padding='0 0 0 20px' size='20px' margin='-10px 0' justifyContent='left'>
                빠르고 쉽습니다.
              </Text>
            </Grid>
          </Grid>
          <hr color='#eee' />
          <Grid padding='0px 20px 10px 20px'>
            <Grid clssName='이름상자' display='flex' justifyContent='center' flexDirection='column'>
              <Grid display='flex' flexDirection='row' width='100%'>
                <Input
                  border='1px solid #ddd'
                  margin='8px 0;'
                  padding='15px 10px'
                  backgroundColor='#F5F6F7'
                  placeholder='성(姓)'
                  width='210px'
                  padding='10px'
                  height='50px'
                  borderRadius='5px'
                  _onchange={e => {
                    setfirstName(e.target.value);
                  }}
                />
                <Input
                  border='1px solid #ddd'
                  margin='8px 0;'
                  padding='15px 10px'
                  backgroundColor='#F5F6F7'
                  placeholder='이름(성은 제외)'
                  width='200px'
                  padding='10px'
                  height='50px'
                  borderRadius='5px'
                  _onchange={e => {
                    setlastName(e.target.value);
                  }}
                />
              </Grid>
              <Input
                border='1px solid #ddd'
                margin='8px 0;'
                padding='15px 10px'
                backgroundColor='#F5F6F7'
                placeholder='휴대폰 번호 또는 이메일'
                width='450px'
                padding='10px'
                height='50px'
                borderRadius='5px'
                _onchange={e => {
                  setUserId(e.target.value);
                }}
              />
              <Input
                border='1px solid #ddd'
                margin='8px 0;'
                padding='15px 10px'
                backgroundColor='#F5F6F7'
                placeholder='새 비밀번호'
                width='450px'
                padding='10px'
                height='50px'
                borderRadius='5px'
                _onchange={e => {
                  setPassword(e.target.value);
                }}
              />
              <Grid margin='0 0 -30px 0'>
                <Grid display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                  <Text size='12px'>생일</Text>
                  <Image size='15' src={question} />
                </Grid>
                <Grid width='405px' display='flex' flexDirection='row' justifyContent='space-between'>
                  <Select>
                    <option selected>연도</option>
                  </Select>
                  <Select>
                    <option selected>월</option>
                  </Select>
                  <Select>
                    <option selected>일</option>
                  </Select>
                </Grid>
              </Grid>
              <Grid>
                <FormControl></FormControl>
                <Grid display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center' margin='0'>
                  <Text size='12px'>성별</Text>
                  <Image size='15' src={question} />
                </Grid>
                <Grid width='405px' display='flex' flexDirection='row' justifyContent='space-between'>
                  <Select>
                    <option selected>남성</option>
                  </Select>
                  <Select>
                    <option selected>여성</option>
                  </Select>
                  <Select>
                    <option selected>직접지정</option>
                  </Select>
                </Grid>
                {/* <Grid display='flex' flexDirection='column'>
                <Select>
                  <option selected>회원님을 어떻게 지칭할지 선택하세요</option>
                </Select>
                <Text> 선택한 항목이 모든 사람에게 공개됩니다.</Text>
                <Input backgroundColor='#F5F6F7' placeholder='새 비밀번호' width='405px' padding='10px' height='10px' borderRadius='5px' />
              </Grid> */}
              </Grid>
              <Text size='10px'>
                가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. <br />
                Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.
              </Text>
              <Button _onClick={signUp()} text='가입하기' width='100px' backgroundColor='#00A400'></Button>
            </Grid>
          </Grid>
        </Grid>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

const Select = styled.select`
  width: 130px; /* 원하는 너비설정 */
  padding: 0.8em 0.5em; /* 여백으로 높이 설정 */
  margin: -10px 0 0 0;
  font-family: inherit; /* 폰트 상속 */
  background: url() no-repeat 95% 50%;
  border: 1px solid #ddd;
  border-radius: 5px; /* iOS 둥근모서리 제거 */
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
`;

export default SignUpModal;
