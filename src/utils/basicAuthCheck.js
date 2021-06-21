import { users, needsAuth } from '~/config/config';

function authHeaderToBase64(header) {
  const b64auth = header.split(' ')[1];
  const [user, password] = Buffer.from(b64auth, 'base64').toString().split(':');
  return [user, password];
}

function findAndCheckUser(user, password, users) {
  const foundUser = users.find(acct => acct.user === user && acct.password === password);
  if (!foundUser) return false;
  return foundUser;
}

async function checkBasicAuth(req, res, users) {
  if (!req.headers.authorization) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
    res.statusCode = 401;
    res.end('<html>Unauthorized</html>');
  } else {
    const [user, password] = authHeaderToBase64(req.headers.authorization);

    if (!findAndCheckUser(user, password, users)) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
      res.statusCode = 401;
    }
  }
}

function init(options) {
  const { users } = options;
  if (!users) {
    throw new Error('You must supply an array of user/password combinations in the config.');
  }

  return (req, res) => {
    if (needsAuth) {
      checkBasicAuth(req, res, users);
    }
  };
}

export default init({
  users: users
});
