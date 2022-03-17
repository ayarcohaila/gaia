import { Icon, IconProps } from '@mui/material';
import React from 'react';

interface Props extends IconProps {
  iconColor: string;
}

const BurstIcon: React.FC<Props> = ({ iconColor, ...props }) => {
  return (
    <Icon {...props}>
      <svg
        color={iconColor}
        width="25"
        height="25"
        viewBox="0 0 657 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="414" height="555" rx="80" fill={iconColor} />
        <path
          d="M464 23V23C505.974 23 540 57.0264 540 99V455C540 496.974 505.974 531 464 531V531V23Z"
          fill={iconColor}
        />
        <path
          d="M590 58V58C627.003 58 657 87.9969 657 125V429C657 466.003 627.003 496 590 496V496V58Z"
          fill={iconColor}
        />
      </svg>
    </Icon>
  );
};

export default BurstIcon;
