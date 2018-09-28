import DateObj from './DateObj';

export default function isSameMonth(a, b) {
  if (!DateObj.isDate(a) || !DateObj.isDate(b)) return false;

  return a.month() === b.month()
    && a.year() === b.year();
}
