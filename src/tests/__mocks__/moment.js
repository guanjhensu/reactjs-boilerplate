// import moment from 'moment'; // don't use this!!! it'll cause loop
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};