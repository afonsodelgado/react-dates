import DateObj from './DateObj';

import isAfterDay from './isAfterDay';

export default function isInclusivelyBeforeDay(a, b) {
  if (!DateObj.isDate(a) || !DateObj.isDate(b)) return false;
  return !isAfterDay(a, b);
}
