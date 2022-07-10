/* eslint-disable */
/* eslint-disable import/prefer-default-export */

export const parseUTCDate = (apiDate) => {
  const utcDate = apiDate.split('');
  utcDate.splice(4, 0, '-');
  utcDate.splice(7, 0, '-');
  utcDate.splice(13, 0, '-');
  utcDate.splice(16, 0, '-');
  return new Date(utcDate.join(''))
};
