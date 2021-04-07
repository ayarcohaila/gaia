import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Modal, Typography, Form, InputNumber } from 'antd';
import { useMemo, useState } from 'react';

import {
  StyledImage,
  StyledImageContainer,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  TokenWrapper,
  Price
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import useAuth from '~/hooks/useAuth';
import { changePrice } from '~/flow/changePrice';
import { cancelSale } from '~/flow/cancelSale';
import { buy } from '~/flow/buy';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';
import useSale from '~/hooks/useSale';
import { LoadingContainer, LoadingIcon } from '~/components/shared/LoadingContainer';
const { Text } = Typography;

const Sale = () => {
  const {
    query: { id }
  } = useRouter();
  const { user } = useAuth();
  const [completeDescription, setCompleteDescription] = useState(false);
  const [editPriceVisible, setEditPriceVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const { sale, isLoading } = useSale(id, user?.addr);
  const [form] = Form.useForm();

  const description = useMemo(() => {
    if (completeDescription || sale?.description?.length < 330) {
      return sale?.description;
    } else {
      return `${sale?.description?.substr(0, 330)}...`;
    }
  }, [completeDescription, sale]);

  const handleBuy = async () => {
    setIsModalLoading(true);
    try {
      await buy(Number(id), user?.addr);
      setIsModalLoading(false);
      Modal.success({
        title: 'Congratulations!',
        content: `You have successfully bought an ${sale?.name}`
      });
    } catch (error) {
      setIsModalLoading(false);
      Modal.error({
        title: `Failed to buy ${sale?.name}`,
        content: 'Please, try again'
      });
    }
  };

  const handleEditPrice = async ({ newPrice }) => {
    setIsModalLoading(true);

    try {
      await changePrice(user?.addr, parseInt(id, 10), Number(newPrice));
      setIsModalLoading(false);
      Modal.success({
        title: 'Price successfully updated!'
      });
    } catch (error) {
      setIsModalLoading(false);
      console.warn(error);
      Modal.error({
        title: `Failed to update price`
      });
    } finally {
      setEditPriceVisible(false);
    }
  };
  const handleCancelSale = async () => {
    setIsModalLoading(true);
    try {
      await cancelSale(Number(id));
      setIsModalLoading(false);
      Modal.success({
        title: 'Sale successfully canceled'
      });
    } catch (error) {
      setIsModalLoading(false);
      console.warn(error);
      Modal.error({
        title: `Failed to cancel sale`
      });
    } finally {
      setCancelModalVisible(false);
    }
  };
  return (
    <TokenWrapper>
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      <Col span={18} offset={3}>
        <Row justify="flex-start" wrap={false}>
          {isLoading ? (
            <LoadingContainer>
              <LoadingIcon />
            </LoadingContainer>
          ) : (
            <>
              <StyledImageContainer>
                <StyledImage src={getImageURL(sale?.imgURL ?? '')} />
              </StyledImageContainer>
              <div className="content">
                <Heading>{sale?.name}</Heading>
                <p>
                  Owned by{' '}
                  <Link href={URLs.profile(user?.addr)}>
                    <OwnerName>{sale?.ownerProfile?.name}</OwnerName>
                  </Link>
                </p>
                <Description>
                  {description}{' '}
                  {description.length > 330 && (
                    <ReadMore onClick={() => setCompleteDescription(prevState => !prevState)}>
                      Show {completeDescription ? 'less' : 'more'}
                    </ReadMore>
                  )}
                </Description>
                <InfoWrapper>
                  <InfoHeading>Info</InfoHeading>
                  <UserInfo
                    name={sale?.ownerProfile?.name}
                    src={getImageURL(sale?.ownerProfile?.avatar ?? '')}
                    type="Creator"
                  />
                  <p>
                    Price: <Price>{Number(sale?.price).toFixed(4)}</Price>
                  </p>
                  {user?.addr !== sale?.ownerProfile?.address ? (
                    <StyledButton type="primary" shape="round" onClick={handleBuy}>
                      Buy
                    </StyledButton>
                  ) : (
                    <>
                      <StyledButton
                        type="primary"
                        shape="round"
                        onClick={() => setEditPriceVisible(true)}>
                        Edit price
                      </StyledButton>
                      <StyledButton
                        cancel
                        type="danger"
                        shape="round"
                        onClick={() => setCancelModalVisible(true)}>
                        Cancel Sale
                      </StyledButton>
                      <Modal
                        visible={editPriceVisible}
                        title="Insert new price"
                        onCancel={() => setEditPriceVisible(false)}
                        onOk={() => form.submit()}
                        okButtonProps={{
                          loading: isModalLoading
                        }}
                        destroyOnClose>
                        <Form form={form} onFinish={handleEditPrice}>
                          <Form.Item>
                            <Text type="secondary">{`Listing your asset on Market`}</Text>
                          </Form.Item>
                          <Form.Item
                            name="newPrice"
                            rules={[
                              {
                                required: true,
                                message: 'You cannot leave price empty'
                              }
                            ]}>
                            <InputNumber
                              step={0.00000001}
                              min={0.00000001}
                              style={{ width: '100%' }}
                              placeholder="10.00000000 FLOW"
                            />
                          </Form.Item>
                        </Form>
                      </Modal>
                      <Modal
                        visible={cancelModalVisible}
                        title={`Do you want to cancel your sale for item (#${sale?.id})`}
                        onCancel={() => setCancelModalVisible(false)}
                        onOk={handleCancelSale}
                        okButtonProps={{
                          loading: isModalLoading
                        }}
                        okText="Cancel Sale"
                        cancelText="Keep Listed"
                        destroyOnClose>
                        <Typography>
                          This action will remove your sale from the marketplace.
                        </Typography>
                      </Modal>
                    </>
                  )}
                </InfoWrapper>
              </div>
            </>
          )}
        </Row>
      </Col>
    </TokenWrapper>
  );
};

export default Sale;
