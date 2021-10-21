import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text, Image } from '../elements';
import defaultUserImage from '../images/기본프로필사진.png';

// #e4e6eb
const HeaderSub = (props) => {

  const userInfo = useSelector(state => state.user);
  const [modalDisplay, setModalDisplay] = React.useState('flex');
  const is_token = document.cookie.split('=')[1];
  
  const toggleModal = () => {
    if(is_token === undefined){
      window.alert('로그인을 해주세요!');
      return ;
    }
    if (modalDisplay === 'none') {
      setModalDisplay('flex');
    } else {
      setModalDisplay('none');
    }
    console.log(is_token);
    document.getElementById('userModal').style.display = modalDisplay;
  }

  // const closeModal = (e) => {    
  //   if(modalDisplay === 'none') {
  //     return ;
  //   }
  //   if(e.target === document.getElementById('userModal')){
  //     return ;
  //   }    
  //   if(e.target === document.getElementById('userModal').querySelectorAll('div')){
  //     return ;
  //   }    
  //   if(e.target === document.getElementById('userModal').querySelectorAll('input')){
  //     return ;
  //   }    
  //   if(e.target === document.getElementById('userModal').querySelectorAll('ul')){
  //     return ;
  //   }    
  //   console.log(e.target);
  //   toggleModal();
  // }
  
  // document.addEventListener('click' , closeModal);
  

  return (
    <Grid
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      width='307px'
    >
      <HeaderWrapper>
        <Grid
          display='flex'
          width='auto'
          height='36px'
          alignItems='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='28px'
          padding='0 5px'
          _onClick={toggleModal}
        >
          <Image
            size='28'
            src={userInfo.imageUrl ? userInfo.imageUrl : defaultUserImage}
            backgroundPosition='center'
            margin='0 4px 0 0'
            border='1px solid gray'
          />
          <Text margin='0' bold size='.9rem'>
            {userInfo.firstName ? (userInfo.firstName + userInfo.lastName) : "사용자"}
          </Text>
        </Grid>
        <Grid
          height='40px'
          width='40px'
          display='flex'
          alignItems='center'
          hover='#e4e6eb'
          justifyContent='center'
          bg='rgba(0, 0, 0, 0.05)'
          borderRadius='20px'
        >
          <i
            style={{
              backgroundImage:
                "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
              backgroundPosition: '0 -128px',
              backgroundSize: 'auto',
              width: '20px',
              height: '20px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
            }}
          ></i>
        </Grid>
        <Grid
          height='40px'
          width='40px'
          display='flex'
          alignItems='center'
          hover='#e4e6eb'
          justifyContent='center'
          bg='rgba(0, 0, 0, 0.05)'
          borderRadius='20px'
        >
          <svg style={{ viewBox: '0 0 28 28', height: '26', width: '26' }}>
            <path d='M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z'></path>
          </svg>
        </Grid>
        <Grid
          height='40px'
          width='40px'
          display='flex'
          alignItems='center'
          hover='#e4e6eb'
          justifyContent='center'
          bg='rgba(0, 0, 0, 0.05)'
          borderRadius='20px'
        >
          <svg style={{ viewBox: '0 0 28 28', height: '26', width: '26' }}>
            <path d='M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z'></path>
          </svg>
        </Grid>
      </HeaderWrapper>
      <Grid
        height='40px'
        width='40px'
        display='flex'
        alignItems='center'
        hover='#e4e6eb'
        justifyContent='center'
        bg='rgba(0, 0, 0, 0.05)'
        borderRadius='20px'
        _onClick={toggleModal}
      >
        <i
          style={{
            backgroundImage:
              "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
            backgroundPosition: '-168px -128px',
            backgroundSize: 'auto',
            width: '20px',
            height: '20px',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
          }}
        ></i>
      </Grid>
    </Grid>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  @media screen and (max-width: 595px) {
    display: none;
  } ;
`;

export default HeaderSub;
