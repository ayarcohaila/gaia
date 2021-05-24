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

export const UserInfo = styled.span`
  width: 100%;
  margin: 0px;
  padding-right: 5px;
  line-height: 0px !important;
  font-size: ${props => props.small && '9px'};
  color: ${props => props.small && props.theme.colors.green};
  position: ${props => props.small && 'absolute'};
  top: ${props => props.small && '45px'};
  margin-left: ${props => props.small && '35px'};
  min-width: 80px;
`;
export const UserBalance = styled.span`
  width: 100%;
  margin: 0px;
  padding-right: 5px;
  line-height: 0px !important;
  font-size: ${props => props.small && '9px'};
  color: ${props => props.small && props.theme.colors.green};
  position: ${props => props.small && 'absolute'};
  top: ${props => props.small && '55px'};
  margin-left: ${props => props.small && '35px'};
  min-width: 80px;
`;

export const UserContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: ${props => props.wrap && 'wrap'};
`;
export const UserAvatarContainer = styled.div`
  width: 50%;
`;
