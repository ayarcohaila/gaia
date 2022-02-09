import { styled, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '10px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '14px',
  '& .MuiDataGrid-root': {
    border: '0px solid black'
  }
}));

export const OffersDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-cell': {
    border: '0px solid black',
    color: theme.palette.grey[600],
    fontWeight: '500'
  },

  '& .MuiDataGrid-columnHeader': {
    color: theme.palette.grey[600]
  },

  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: '600'
  },

  '& .MuiDataGrid-columnSeparator, .MuiDataGrid-columnSeparator.MuiDataGrid-columnSeparator--sideRight':
    {
      display: 'hidden',
      color: theme.palette.grey[200]
    },

  '.blue-text': {
    color: theme.palette.primary.main,
    fontWeight: '600',
    outline: 'none',
    marginLeft: '6px'
  },

  '.remove-outline:focus': {
    outline: 'solid #fff 0px'
  },

  '& .MuiDataGrid-row.Mui-selected, .MuiDataGrid-root.MuiDataGrid-row:hover, .MuiDataGrid-root.MuiDataGrid-row.Mui-hovered':
    {
      backgroundColor: 'transparent',
      borderRadius: '14px'
    },

  '& .MuiDataGrid-row': {
    width: '98.5%'
  },

  '& .MuiDataGrid-row:first-of-type': {
    marginTop: '10px'
  },

  '& .MuiDataGrid-row:hover': {
    backgroundColor: 'white',
    borderRadius: '14px'
  }
}));

export const CustomButton = styled(Button)(() => ({
  borderRadius: '20px',
  fontSize: '10px',
  fontWeight: '600',
  textAlign: 'center'
}));

export const CentralizedContent = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}));
