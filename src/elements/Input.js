import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from './index';

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    margin,
    width,
    bg,
    borderRadius,
    border,
  } = props;

  const styles = { bg: bg, borderRadius: borderRadius, border: border };

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin='0px'>{label}</Text>}
        <ElTextarea
          value={value}
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <Grid>
      {label && <Text margin='0px'>{label}</Text>}
      <ElInput
        {...styles}
        width={width}
        margin={margin}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
      />
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
  width: '100%',
  bg: false,
  borderRadius: false,
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  margin: ${(props) => props.margin};
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  margin: ${(props) => props.margin};
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : ''};
  ${(props) => (props.border ? `border: ${props.border}` : '')};
`;

export default Input;
