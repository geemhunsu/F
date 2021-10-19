import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size, margin, border, } = props;

  const styles = {
    src: src,
    size: size,
    margin: margin,
    border: border,
  };

  if (shape === 'circle') {
    return (
      <React.Fragment>
        <ImageCircle {...styles}></ImageCircle>
      </React.Fragment>
    );
  }

  if (shape === 'TitleLogo') {
    return <MainInner {...styles}></MainInner>;
  }

  if (shape === 'square') {
    return (
      <React.Fragment>
        <OuterRect>
          <InnerRect {...styles}></InnerRect>
        </OuterRect>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <OuterRect>
        <InnerRect {...styles}></InnerRect>
      </OuterRect>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://district93.org/wp-content/uploads/2017/07/icon-user-default.png',
  size: 36,
  margin: false,
  border: false,
};

const ImageCircle = styled.div`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url(${props => props.src});
  background-size: cover;
  ${(props) => (props.margin ? `margin: ${props.margin}` : 'margin: 4px')};
  flex-shrink: 0;
  ${props => props.border ? `border: ${props.border};` : ''};
  box-sizing: border-box;
`;

const OuterRect = styled.div`
  width: 100%;
  min-width: 250px;
`;

const InnerRect = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const MainInner = styled.div`
  width: 100%;
  min-width: 25rem;
  position: relative;
  padding-top: 35%;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-position: left;
  background-size: cover;
  ${props => props.border ? `border: ${props.border};` : ''};
  box-sizing: border-box;
`;

export default Image;
