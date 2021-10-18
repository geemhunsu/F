import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from './index';

const Input = props => {
  const { label, placeholder, _onChange, type, multiLine, value, margin, width, padding, 
  height, border, borderRadius, bg, backgroundImage, } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin='0px'>{label}</Text>}
        <ElTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange}
        height={height} border={border} borderRadius={borderRadius} bg={bg} 
        padding={padding} backgroundImage={backgroundImage}  />
      </Grid>
    );
  }

  return (
    <Grid>
      {label && <Text margin='0px'>{label}</Text>}
      <ElInput width={width} margin={margin} type={type} placeholder={placeholder} onChange={_onChange} 
      height={height} border={border} borderRadius={borderRadius} bg={bg} 
      padding={padding} backgroundImage={backgroundImage}  />
    </Grid>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  margin: 0,
  padding: false,
  width: '100%',
  height: false,
  border: false,
  borderRadius: false,
  bg: false,
  backgroundImage: false,
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  margin: ${props => props.margin};
  border: ${props => props.border};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  backgroundImage: ${props => props.backgroundImage};
  box-sizing: border-box;
`;

const ElInput = styled.input`
  margin: ${props => props.margin};
  border: ${props => props.border};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  backgroundImage: ${props => props.backgroundImage};
  box-sizing: border-box;
`;

export default Input;
