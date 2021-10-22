import React from 'react';
import { Grid, Input, Text, Button, Image } from '../elements/index';
import { Dialog } from '@material-ui/core';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';

import styled from 'styled-components';
import question from '../images/question.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SignUpModal = props => {
  const dispatch = useDispatch();

  const [firstName, setfirstName] = React.useState();
  const [lastName, setlastName] = React.useState();
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [year, setYear] = React.useState();
  const [month, setMonth] = React.useState();
  const [day, setDay] = React.useState();
  const [gender, setGender] = React.useState('woman');
  const [option, setOption] = React.useState('');

  //모달
  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };
  //생년월일기능
  const yearOptions = () => {
    const arr = [];
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }
    return arr;
  };

  const monthOptions = () => {
    const arr = [];
    const startMonth = 1;
    const endMonth = 12;
    for (let i = endMonth; i >= startMonth; i--) {
      arr.push(<option value={i}>{i}월</option>);
    }
    return arr;
  };

  const dayOptions = () => {
    const arr = [];
    const startDay = 1;
    const endDay = 31;
    for (let i = endDay; i >= startDay; i--) {
      arr.push(<option value={i}>{i}</option>);
    }
    return arr;
  };
  //성별기능
  const genderChange = e => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  //미들웨어전송
  const signUp = () => {
    const signupInfo = {
      firstName: firstName,
      lastName: lastName,
      userId: userId,
      pwd: password,
      birth: `${year}-${month}-${day}`,
      sex: gender,
    };
    console.log(signupInfo);
    dispatch(userCreators.signupMiddleware(signupInfo));
    modalClose();
  };

  return (
    <Dialog maxWidth={'md'} scroll='paper' open={showModal}>
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
              <Grid margin='0 0 -10px 0 '>
                <Text padding='0 0 0 20px' size='20px' margin='-10px 0' justifyContent='left'>
                  빠르고 쉽습니다.
                </Text>
              </Grid>
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
                  width='220px'
                  padding='10px'
                  height='50px'
                  borderRadius='5px'
                  inputFocusOutline='none'
                  inputFocusBorder='1px solid red'
                  fontSize='15px'
                  _onChange={e => {
                    setfirstName(e.target.value);
                  }}
                />
                <Input
                  border='1px solid #ddd'
                  margin='8px 0;'
                  padding='15px 10px'
                  backgroundColor='#F5F6F7'
                  placeholder='이름(성은 제외)'
                  width='210px'
                  padding='10px'
                  height='50px'
                  borderRadius='5px'
                  inputFocusOutline='none'
                  inputFocusBorder='1px solid red'
                  fontSize='15px'
                  _onChange={e => {
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
                width='460px'
                padding='10px'
                height='50px'
                borderRadius='5px'
                inputFocusOutline='none'
                inputFocusBorder='1px solid red'
                fontSize='15px'
                _onChange={e => {
                  setUserId(e.target.value);
                }}
              />
              <Input
                border='1px solid #ddd'
                margin='8px 0;'
                padding='15px 10px'
                backgroundColor='#F5F6F7'
                placeholder='새 비밀번호'
                type='password'
                width='460px'
                padding='10px'
                height='50px'
                borderRadius='5px'
                inputFocusOutline='none'
                inputFocusBorder='1px solid red'
                fontSize='15px'
                _onChange={e => {
                  setPassword(e.target.value);
                }}
              />
              <Grid margin='0 0 -20px 0'>
                <Grid display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                  <Text size='14px'>생일</Text>
                  <Image size='15' src={question} />
                </Grid>
                <Grid width='460px' display='flex' flexDirection='row' justifyContent='space-between'>
                  <Select
                    onChange={e => {
                      setYear(e.target.value);
                    }}
                  >
                    <option value='0'>연도</option>
                    {yearOptions()}
                  </Select>
                  <Select
                    onChange={e => {
                      setMonth(e.target.value);
                    }}
                  >
                    <option value='0'>월</option>
                    {monthOptions()}
                  </Select>
                  <Select
                    onChange={e => {
                      setDay(e.target.value);
                    }}
                  >
                    <option value='0'>일</option>
                    {dayOptions()}
                  </Select>
                </Grid>
              </Grid>
              <Grid margin='30px 0 10px 0'>
                <Grid display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center' margin='0'>
                  <Text size='14px'>성별</Text>
                  <Image size='15' src={question} />
                </Grid>
                <Grid>
                  <FormControl component='fieldset'>
                    <RadioGroup row aria-label='gender' value={gender} onChange={genderChange}>
                      <Grid margin='0px'>
                        <FormControlLabel
                          value='woman'
                          control={<Radio color='primary' />}
                          style={{ paddingLeft: '10px', border: '1px solid #ddd', width: '133px', margin: '0', borderRadius: '5px', justifyContent: 'space-between' }}
                          label='여성'
                          labelPlacement='start'
                        />
                        <FormControlLabel
                          value='man'
                          control={<Radio color='primary' />}
                          style={{ paddingLeft: '10px', border: '1px solid #ddd', width: '133px', margin: '0', margin: '0 13px', borderRadius: '5px', justifyContent: 'space-between' }}
                          label='남성'
                          labelPlacement='start'
                        />
                        <FormControlLabel
                          value='other'
                          control={<Radio color='primary' />}
                          style={{ paddingLeft: '10px', border: '1px solid #ddd', width: '133px', margin: '0', borderRadius: '5px', justifyContent: 'space-between' }}
                          label='직접 지정'
                          labelPlacement='start'
                        />
                      </Grid>
                    </RadioGroup>
                  </FormControl>
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
              <Grid margin='20px 0 20px 0' textAlign='center'>
                <Button
                  _onClick={() => {
                    signUp();
                  }}
                  text='가입하기'
                  width='200px'
                  borderRadius='10px'
                  backgroundColor='#00A400'
                ></Button>
              </Grid>
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
  width: 145px; /* 원하는 너비설정 */
  padding: 0.5em 0.5em; /* 여백으로 높이 설정 */
  font-size: 17px;
  font-family: inherit; /* 폰트 상속 */
  background: url() no-repeat 95% 50%;
  border: 1px solid #ddd;
  border-radius: 5px; /* iOS 둥근모서리 제거 */
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
`;

// const Radio = styled.input`
//  type: 'radio';
//  value: 'option1'
//  checked: {true}

// `;

export default SignUpModal;
