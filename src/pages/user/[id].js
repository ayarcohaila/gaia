import Head from 'next/head';
import { Col, Input } from 'antd';

import { Heading, StyledButton, StyledUpload, Label, EditProfileWrapper } from './styled';

const EditUser = () => {
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
          className="avatar-uploader">
          <StyledButton type="primary" shape="round">
            Choose File
          </StyledButton>
        </StyledUpload>
        <Input className="input" placeholder="Name" />
        <Input.TextArea className="input" placeholder="Description" />
        <StyledButton type="primary" shape="round" width="100%">
          Save
        </StyledButton>
      </Col>
    </EditProfileWrapper>
  );
};

export default EditUser;
