import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Image, Text } from '../elements';
import { actionCreators as imageActions } from '../redux/modules/image';

const ImageUpload = () => {
  const dispatch = useDispatch();
  const preview = useSelector(state => state.image.preview)

  const [labelDisplay, setLabelDisplay] = React.useState('block');

  const selectFile = (e) => {
    if(e.target.file === ""){
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

  }
  return (
    <React.Fragment>
      <Grid>
        <Wrap>
          <label for='fileInput' id='inputLabel'>
            <Grid display='flex' alignItems='center' justifyContent='center'
              flexDirection='column'>
              <Grid width='40px' height='40px' bg='#e4e6eb' borderRadius='20px' margin='0 0 8px 0'
                display='flex' alignItems='center' justifyContent='center'>
                <ElI />
              </Grid>
              프로필 사진 변경
            </Grid>
          </label>
          <Grid height='auto' display='relative' >
            <Image src={preview} shape='rectangle' margin='0 0 5px 0' />
            <label for='fileInput' id='inputLabelButton'>
              <Grid display='flex' alignItems='center' justifyContent='center' 
              hover='rgba(0, 0, 0, 0.05)' orderRadius='5px' width='auto' padding='5px 10px'>
                <EditIcon/>
                <Text bold margin='0' size='0.9rem' width='auto' >수정</Text>
              </Grid>
            </label>
          </Grid>
          <input type='file' id='fileInput' onChange={selectFile} />
        </Wrap>
      </Grid>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  #inputLabel {    
    display: block;
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

  inputLabelButton {
    display: block;
    
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