import DateObj from './DateObj';

import isSameMonth from './isSameMonth';

export default function isPrevMonth(a, b) {
  if (!DateObj.isDate(a) || !DateObj.isDate(b)) return false;
  return isSameMonth(a.clone().subtract(1, 'month'), b);
}
