import React from 'react';
import { Grid, Input, Text, Button } from '../elements';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const Modal = props => {
  const { showModal, setShowModal } = props;
  return (
    <div>
      <Dialog>
        <DialogTitle>
          <div>가입하기</div>
          <div>가입하기</div>
          <hr />
        </DialogTitle>

        <DialogContent>
          <Grid clssName='이름상자' display='flex' justifyContent='center'>
            <Input placeholder='성' width='170px' padding='10px' height='10px' borderRadius='5px' />
            <Input placeholder='이름' width='170px' padding='10px' height='10px' borderRadius='5px' />

            <Input placeholder='이메일' width='375px' padding='10px' height='10px' borderRadius='5px' />
            <Input placeholder='비밀번호' width='375px' padding='10px' height='10px' borderRadius='5px' />
            <Text>가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.</Text>
            <Button>가입하기</Button>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* <Grid className='모달백그라운드'>
        <Grid className='모달컨테이너' backgroundColor='#fff' borderRadius='0 0 5px 5px' padding='16px' position='relative' width='432px'>
          <Text>가입하기</Text>
          <Text>빠르고 쉽습니다.</Text>
          <hr />
          <Grid clssName='이름상자' display='flex' justifyContent='center'>
            <Input placeholder='성' width='170px' padding='10px' height='10px' borderRadius='5px' />
            <Input placeholder='이름' width='170px' padding='10px' height='10px' borderRadius='5px' />
          </Grid>
          <Input placeholder='이메일' width='375px' padding='10px' height='10px' borderRadius='5px' />
          <Input placeholder='비밀번호' width='375px' padding='10px' height='10px' borderRadius='5px' />
          <Text>가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.</Text>
          <Button>가입하기</Button>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Modal;
