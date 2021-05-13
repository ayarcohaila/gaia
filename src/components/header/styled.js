import { AutoComplete, Col, Layout } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;
export const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  div.ant-select-selector {
    border-radius: 50px !important;
  }
`;
export const ColStyled = styled(Col)`
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
  }
`;
export const MenuCol = styled(Col)`
  top: -2px;
`;
export const CustomHeader = styled(Header)`
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const UserName = styled.span`
  padding-left: 5px;
  padding-right: 5px;
`;

export const SubmitInput = styled.input`
  position: absolute;
  left: -10000px;
`;

export const StyledForm = styled.form`
  width: 80%;

  .ant-select-clear {
    display: none !important;
  }
`;
