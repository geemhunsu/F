import React from 'react';
import { Grid, Input, Text, Button, Image } from '../elements/index';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import styled from 'styled-components';

const PostWriteModal = props => {
  const { openModal, setModal } = props;
  return <Dialog maxWidth={'xs'} open={openModal}></Dialog>;
};

export default PostWriteModal;
