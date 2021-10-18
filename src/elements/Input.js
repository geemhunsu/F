import React from 'react';
import styled from 'styled-components';

const Input = props => {
    const { label, placeholder, _onChange, type, multiLine, value, margin, width } = props;

    if (multiLine) {
        return (
            <div>
                {label && <Text margin='0px'>{label}</Text>}
                <ElTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange}></ElTextarea>
            </div>
        );
    }

    return (
        <div>
            {label && <Text margin='0px'>{label}</Text>}
            <ElInput width={width} margin={margin} type={type} placeholder={placeholder} onChange={_onChange} />
        </div>
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
    _onChange: () => {},
};

const ElTextarea = styled.textarea`
    margin: ${props => props.margin};
    border: 1px solid #212121;
    width: ${props => props.width};
    padding: 12px 4px;
    box-sizing: border-box;
`;

const ElInput = styled.input`
    margin: ${props => props.margin};
    border: 1px solid #212121;
    width: ${props => props.width};
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
