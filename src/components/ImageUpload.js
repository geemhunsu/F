import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AWS from "aws-sdk";

import { FaCheck } from 'react-icons/fa'
import { IconContext } from 'react-icons';

import { Grid, Image, Text, Button } from '../elements';
import { actionCreators as imageActions } from '../redux/modules/image';


const ImageUpload = () => {
  const dispatch = useDispatch();
  const preview = useSelector(state => state.image.preview)
  const previewName = useSelector(state => state.image.previewName)
  const previewType = useSelector(state => state.image.previewType)
  const previewFullName = useSelector(state => state.image.previewFullName)
  const previewFile = useSelector(state => state.image.previewFile)

  const [labelDisplay, setLabelDisplay] = React.useState('block');
  const [previewDisplay, setPreviewDisplay] = React.useState('none');

  const selectFile = (e) => {
    if (e.target.files === "") {
      return;
    }
    const fileName = e.target.files[0].name.split('.')[0];
    const fileType = e.target.files[0].name.split('.')[1];
    const fileFullName = e.target.files[0].name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result, fileName, fileType, fileFullName, file));
    }

    if (preview !== null) {
      setLabelDisplay('none');
      setPreviewDisplay('block');
    }

  }

  AWS.config.update({
    region: "ap-northeast-2",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:3be6a8f1-b813-418a-914b-0707888dcbdc',
    }),
  })

  const uploadToAws = () => {
    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'hanghae-miniproject-team2-imagebucket',
        Key: `${previewName}.${previewType}`,
        Body: previewFile,
        ACL: "public-read",
      }
    })
    const promise = awsUpload.promise();
    promise.then(data => {
      window.alert('업로드 성공')
    }).catch(err => {
      window.alert('업로드 실패')
    })
  }

  return (
    <React.Fragment>
      <Grid>
        <Wrap>
          <label for='fileInput' id='inputLabel' style={{ display: labelDisplay }}>
            <Grid display='flex' alignItems='center' justifyContent='center'
              flexDirection='column'>
              <Grid width='40px' height='40px' bg='#e4e6eb' borderRadius='20px' margin='0 0 8px 0'
                display='flex' alignItems='center' justifyContent='center'>
                <ElI />
              </Grid>
              프로필 사진 수정
            </Grid>
          </label>
          <Grid height='auto' position='relative' display={previewDisplay}>
            <Image src={preview} shape='rectangle' margin='0 0 5px 0' />
            <label for='fileInput' id='inputLabelButton'>
              <Grid display='flex' alignItems='center' justifyContent='center' hover='#e1e2e7'
                bg='white' borderRadius='5px' width='auto' padding='5px 10px'>
                <EditIcon />
                <Text bold margin='0' size='0.9rem' >사진 변경</Text>
              </Grid>
            </label>
            <Grid display='flex' position='absolute' top='10px' right='20px' hover='#e1e2e7'
            bg='white' width='auto' height='auto' padding='5px 10px' borderRadius='5px' 
            alignItems='center' _onClick={uploadToAws}>
              <IconContext.Provider value={{ color: 'black', size: '16', }}>
                <FaCheck />
              </IconContext.Provider>
              <Text bold margin='0' size='0.9rem' margin='0 0 0 5px'>수정하기</Text>
            </Grid>
          </Grid>
          <input type='file' id='fileInput' onChange={selectFile} />
        </Wrap>
      </Grid>
    </React.Fragment>
  );
};

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
      cursor: pointer;
      background-color: #dee0e4;
    }
  }

  input {
    display:none;
  }

  #inputLabelButton {
    display: block;
    position: absolute;
    top: 10px;
    left: 20px;    
  }
`;

const ElI = styled.i`  
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/qlH1TETMDjS.png");
  background-position: 0px -408px;
  background-size: auto;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const EditIcon = styled.i`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ttTXZ6XJuCZ.png");
  background-position: -119px -149px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 5px;
`;

export default ImageUpload;