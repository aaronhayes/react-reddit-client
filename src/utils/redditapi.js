import snoowrap from 'snoowrap';

export default new snoowrap({
  userAgent: 'Tanda',
  accessToken: process.env.REACT_APP_REDDIT_ACCESS_TOKEN
});
