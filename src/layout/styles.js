import styled from 'styled-components';
import { Layout, Col, Typography, Row } from 'antd';

/**
 * Content Styles
 */
export const Content = styled(Layout.Content)`
  overflow: auto;
  min-height: calc(100vh - 64px - 267px);
  background: ${({ theme }) => theme.colors.backgroundGrey};
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

  a {
    color: rgba(0, 0, 0, 0.3) !important;
  }
`;
