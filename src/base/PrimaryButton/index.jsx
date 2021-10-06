import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export default PrimaryButton;
