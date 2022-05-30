import styled from 'styled-components';
import { Button } from '@mui/material';

export const LoadMoreButton = styled(Button)`
  margin-top: 20px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  outline-color: #117821;
  padding: 8px 16px;
  align-self: center;
  color: #117821 !important;
  &:hover {
    color: #117821;
    outline-color: black;
  }
`;
