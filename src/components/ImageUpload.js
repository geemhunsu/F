import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Grid } from '../elements';
import { actionCreators as imageActions } from '../redux/modules/image';

const ImageUpload = () => {
  const dispatch = useDispatch();

  const selectFile = (e) => {
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
            <Grid width='auto' display='flex' alignItems='center' justifyContent='center'
            flexDirection='column'>
              <Grid width='40px'height='40px' bg='#e4e6eb' borderRadius='20px' margin='0 0 8px 0'
              display='flex' alignItems='center' justifyContent='center'>
                <ElI />
              </Grid>
              프로필 사진 변경
            </Grid>
          </label>
          <input type='file' id='fileInput' onChange={selectFile} />
        </Wrap>
      </Grid>
    </React.Fragment>
  );
};

const Wrap = styled.div`
    label {    
    display: block;
    width: 270px;
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

export default ImageUpload;