import { AutoComplete, Col, Layout, Menu, Popover, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Image from 'next/image';
const { Header } = Layout;
const { Text } = Typography;
export const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  div.ant-select-selector {
    border-radius: 50px !important;
  }
`;

export const OptionStyled = styled(AutoComplete.Option)`
  width: 80%;
`;

export const DropdownImage = styled(Image)`
  margin-right: 50px;
`;

export const DropdownVideo = styled.video`
  object-fit: contain;
`;

export const DropdownText = styled(Text)`
  padding-left: 20px;
`;

export const UserIcon = styled(UserOutlined)``;

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
  left: 0;
  top: 0;
  right: 0;
  overflow: hidden;
  @media (max-width: 800px) {
    z-index: 2;
    position: fixed;
  }
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
  align-self: center;
`;
export const UserBalance = styled.span`
  font-size: ${props => props.small && '9px'};
  color: ${props => props.small && props.theme.colors.green};
  align-self: start;
  @media (min-width: 980px) {
    position: absolute;
    margin-top: 35px;
  }
`;

export const UserContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UserAvatarContainer = styled.div`
  width: 50%;
  align-self: center;
  margin-left: 1rem;
`;
export const SearchContainer = styled.div`
  max-width: 600px;
  justify-self: center;
  @media (max-width: 990px) {
    min-width: 350px;
  }
  @media (max-width: 600px) {
    min-width: 250px;
  }
  @media (max-width: 420px) {
    min-width: 210px;
    padding-right: 20px;
  }
`;

export const ListItem = styled.a`
  color: ${({ isSelected }) => (isSelected ? '#096dd9' : 'black')};
  border-left: ${({ isSelected }) => (isSelected ? '2px solid #096dd9' : 'none')};
  padding: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

export const UserPopover = styled(Popover)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledMenu = styled(Menu)`
  max-height: 62px;
`;
