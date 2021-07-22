import { Col, Row, Spin, notification } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import isEqual from 'lodash.isequal';
import { LoadingOutlined } from '@ant-design/icons';

import useBlockPage from '~/hooks/useBlockPage';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { editProfile } from '~/flow/editProfile';
import { uploadFile } from '~/utils/upload';
import { getImageURL } from '~/utils/getImageUrl';

import MESSAGES from '~/utils/messages';

import {
  Heading,
  StyledButton,
  StyledUpload,
  Label,
  StyledProfileInput,
  StyledProfileTextArea,
  ImagePreview
} from '../../components/profile/styled';
import Seo from '~/components/seo/seo';
import basicAuthCheck from '~/utils/basicAuthCheck';

const EditProfile = () => {
  const shouldPageBlock = useBlockPage();
  const { user } = useAuth();
  const { userProfile } = useProfile(user?.addr);
  const [state, setState] = useState({
    name: null,
    avatar: null,
    info: null,
    loading: false
  });

  useEffect(() => {
    shouldPageBlock();
  }, []);

  const disabled = useMemo(() => {
    return isEqual(
      { name: userProfile?.name, avatar: userProfile?.avatar, info: userProfile?.info },
      state
    );
  }, [userProfile, state]);

  useEffect(async () => {
    if (userProfile) {
      setState({
        name: userProfile?.name,
        avatar: userProfile?.avatar,
        info: userProfile?.info
      });
    }
  }, [userProfile]);

  const uploadImage = async ({ file }) => {
    setState(prevState => ({ ...prevState, loading: true }));

    const showErrorModal = () =>
      notification.open({
        key: `edit_profile`,
        type: 'error',
        message: MESSAGES.error_upload_profile_title,
        description: MESSAGES.error_upload_profile_msg
      });

    const hash = await uploadFile(file, showErrorModal);
    setState(prevState => ({ ...prevState, avatar: getImageURL(hash), loading: false }));
  };
  const handleSave = async () => {
    const { name, avatar, info } = state;
    try {
      notification.open({
        key: `edit_profile`,
        message: `Editing profile`,
        description: MESSAGES.transaction_msg,
        icon: <Spin />,
        duration: null
      });
      await editProfile(name, avatar, info);
      notification.open({
        key: `edit_profile`,
        type: 'success',
        message: MESSAGES.profile_updated_title,
        description: MESSAGES.profile_updated_msg
      });
    } catch (error) {
      notification.open({
        key: `edit_profile`,
        type: 'error',
        message: MESSAGES.error_update_profile_title,
        description: MESSAGES.error_update_profile_desc
      });
    }
  };

  return (
    <Row>
      <Seo title="Edit Profile" />
      <Col span={18} offset={3} lg={{ span: 10, offset: 7 }}>
        <Heading>Edit User Profile</Heading>
        <Label>Upload Photo</Label>
        <StyledUpload
          maxCount={1}
          name="avatar"
          listType="picture-card"
          customRequest={uploadImage}
          showUploadList={false}>
          {state.loading ? (
            <LoadingOutlined />
          ) : state.avatar ? (
            <ImagePreview src={state.avatar} alt="avatar preview" />
          ) : (
            <StyledButton type="primary" shape="round">
              Choose File
            </StyledButton>
          )}
        </StyledUpload>
        <StyledProfileInput
          placeholder="Name"
          onChange={e => setState(prevState => ({ ...prevState, name: e.target.value }))}
          value={state.name}
        />
        <StyledProfileTextArea
          placeholder="Description"
          onChange={e => setState(prevState => ({ ...prevState, info: e.target.value }))}
          value={state.info}
        />
        <StyledButton
          onClick={handleSave}
          type="primary"
          shape="round"
          width="100%"
          {...{ disabled }}>
          Save
        </StyledButton>
      </Col>
    </Row>
  );
};

export default EditProfile;
export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  await basicAuthCheck(req, res);

  return {
    props: {}
  };
}
