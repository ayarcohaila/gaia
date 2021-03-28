import Head from 'next/head';
import { Col, Input, Modal } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import isEqual from 'lodash.isequal';
import { LoadingOutlined } from '@ant-design/icons';

import useAuth from '~/hooks/useAuth';
import { editProfile } from '~/flow/editProfile';
import { uploadFile } from '~/utils/upload';
import { getImageURL } from '~/utils/getImageUrl';

import {
  Heading,
  StyledButton,
  StyledUpload,
  Label,
  EditProfileWrapper,
  ImagePreview
} from './styled';

const EditProfile = () => {
  const { user } = useAuth();
  const [state, setState] = useState({
    name: null,
    avatar: null,
    info: null,
    loading: false
  });

  const disabled = useMemo(() => {
    return isEqual({ name: user?.name, avatar: user?.avatar, info: user?.info }, state);
  }, [user, state]);

  useEffect(() => {
    if (user) {
      setState({
        name: user.name,
        avatar: user.avatar,
        info: user.info
      });
    }
  }, [user]);

  const uploadImage = async ({ file }) => {
    setState(prevState => ({ ...prevState, loading: true }));

    const showErrorModal = () =>
      Modal.error({
        title: 'Failed to upload your avatar',
        content: 'Please, try again'
      });

    const hash = await uploadFile(file, showErrorModal);
    setState(prevState => ({ ...prevState, avatar: getImageURL(hash), loading: false }));
  };

  const handleSave = async () => {
    const { name, avatar, info } = state;
    try {
      await editProfile(name, avatar, info);
      Modal.success({
        title: 'Profile successfully updated!'
      });
    } catch (error) {
      Modal.error({
        title: 'Failed to update your profile :/',
        content: 'Please, try again'
      });
    }
  };

  return (
    <EditProfileWrapper>
      <Head>
        <title>Edit Profile | NiftyBeats</title>
      </Head>
      <Col span={10} offset={7}>
        <Heading>Edit profile</Heading>
        <Label>Upload profile picture</Label>
        <StyledUpload
          maxCount={1}
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
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
        <Input
          className="input"
          placeholder="Name"
          onChange={e => setState(prevState => ({ ...prevState, name: e.target.value }))}
          value={state.name}
        />
        <Input.TextArea
          className="input"
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
    </EditProfileWrapper>
  );
};

export default EditProfile;
