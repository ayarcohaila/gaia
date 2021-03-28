import styled from 'styled-components';
import { Layout, Col, Input, Button, Typography, Row } from 'antd';

/**
 * Layout Styles
 */

export const CustomLayout = styled(Layout)`
  width: 100%;
`;

/**
 * Header Styles
 */

export const Header = styled(Layout.Header)`
  background-color: white;
  font-family: Work Sans;
`;

export const SearchCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled(Input)`
  width: 350px;
`;

export const SearchButton = styled(Button)`
  border-width: 0;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
`;

export const UserName = styled(Typography.Text)`
  margin-right: 10px;
`;

/**
 * Content Styles
 */
export const Content = styled(Layout.Content)`
  overflow: auto;
`;

/**
 * Footer Styles
 */

export const LayoutFooter = styled(Layout.Footer)`
  background-color: white;
`;

export const SummaryCol = styled(Col)`
  padding: 0 10px 0 0;
`;

export const CustomRow = styled(Row)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px 0 0 0;
`;

export const Title = styled(Typography.Title)`
  font-family: Work Sans;
  font-weight: 500;
`;

export const Text = styled(Typography.Text)`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3);
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CustomLink = styled(Typography.Link).attrs(() => ({
  color: 'rgba(0, 0, 0, 0.3)'
}))`
  color: rgba(0, 0, 0, 0.3) !important;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: ${props => (props.margin ? '10px' : '0')};
`;
