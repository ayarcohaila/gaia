import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 8px;
  padding: 8px 12px;
  width: 8.8rem;
  height: 2.4rem;
  border-radius: 8px;
  background-color: ${theme.palette.purple['100']};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover{
    border: 1px solid ${theme.palette.grey['100']}};
  }
`
);

export const Text = styled(Typography)(
  ({ theme }) => `
  width: 100%;
  height: 16px;
  margin: 0 8px 0 0;
  font-family: 'IBMPlexMono';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.2px;
  color: ${theme.palette.grey['100']};
`
);

export const RectangleContainer = styled(Box)(
  () => `
  display: flex;
  flex-direction: column;
  width: 40px;
  margin-bottom: 0.25rem;
`
);

export const RectangleTop = styled(Box)(
  ({ theme }) => `
  width: 5px;
  height: 7px;
  margin: 3px 3px 0 3px;
  border-radius: 1px;
  box-shadow: 0 0 0 0.8px ${theme.palette.grey['100']}, inset 0 0 0 0.8px ${theme.palette.grey['100']}, 0 0 0 2.3px ${theme.palette.purple['100']},
    inset 0 0 0 2.3px ${theme.palette.purple['100']};
  background-color: ${theme.palette.purple['100']};
`
);

export const RectangleBottom = styled(Box)(
  ({ theme }) => `
  width: 5px;
  height: 7px;
  margin: -3px 3px 0 0;
  border-radius: 1px;
  box-shadow: 0 0 0 0.8px ${theme.palette.grey['100']}, inset 0 0 0 0.8px ${theme.palette.grey['100']}, 0 0 0 2.3px ${theme.palette.purple['100']},
    inset 0 0 0 2.3px ${theme.palette.purple['100']};
  background-color: ${theme.palette.purple['100']};
`
);
