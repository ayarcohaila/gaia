/**
 * @Input const text = `You will repleace {value1}, {value2} and {value3}.`
 * @Example transformMessage(text, ["10", "15", "20"])
 * @param {string} text
 * @param {array} values
 * @returns `You will repleace 10, 15 and 20.`
 */
export const transformMessage = (text, values) => {
  try {
    values.forEach((value, i) => (text = text.replace(`{value${i + 1}}`, value)));
    return text;
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  transaction_msg: 'You will receive a message to accept this transaction.',

  setting_up_account_msg: 'Setting up your account',
  setup_account_msg: 'You have set up your account',
  setup_account_desc: 'Your have successfully set up your account',
  accept_transf_msg: 'You will be asked to accept transferring {value1} to {value2}.',
  profile_updated_title: `Profile updated`,
  profile_updated_msg: `Your profile has been successfully edited`,

  error_update_profile_title: `Error on updating your profile`,
  error_update_profile_desc: `Your profile updating has failed`,
  error_upload_profile_title: `Error on upload your profile image`,
  error_upload_profile_msg: `Your profile image upload has failed`,
  error_setup_account_msg: 'Error on setup your account',
  error_setup_account_desc: 'Your account setup failed, please try again later.'
};
