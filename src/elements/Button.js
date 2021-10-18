import React from 'react';
import styled from 'styled-components';

const Button = props => {
    const { color, text, _onClick, isFloat, children, margin, width, padding, backgroundColor, height, fontSize } = props;

    if (isFloat) {
        return (
            <>
                <FloatButton onClick={_onClick}></FloatButton>
            </>
        );
    }

    const styles = {
        margin: margin,
        width: width,
        padding: padding,
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        fontSize: fontSize,
        padding: padding,
    };

    return (
        <>
            <ElButton {...styles} onClick={_onClick}>
                {text ? text : children}
            </ElButton>
        </>
    );
};

Button.defaultProps = {
    position: false,
    text: false,
    children: null,
    _onClick: () => {},
    isFloat: false,
    margin: 'auto',
    width: '100%',
    padding: '12px 0px',
    color: 'white',
    height: '50px',
};

const ElButton = styled.button`
    width: ${props => props.width};
    color: ${props => props.color};
    padding: ${props => props.padding};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    background-color: #212121;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    border: none;
`;

const FloatButton = styled.div`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: ${props => props.color};
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
`;

export default Button;
