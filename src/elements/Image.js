import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return (
      <React.Fragment>
        <ImageCircle {...styles}></ImageCircle>
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
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 4px;
`;

const OuterRect = styled.div`
  width: 100%;
  min-width: 250px;
`;

const InnerRect = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

export default Image;
