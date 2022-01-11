import moment from 'moment';

export default function workExpirence() {

  const joinedDate = moment("2018-05-01");
  let now = moment();
  const workExpirence = now.diff(joinedDate, "year", true);
  return workExpirence.toFixed(1);
}