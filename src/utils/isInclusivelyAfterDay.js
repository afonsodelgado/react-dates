import DateObj from './DateObj';

import isBeforeDay from './isBeforeDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!DateObj.isDate(a) || !DateObj.isDate(b)) return false;
  return !isBeforeDay(a, b);
}
