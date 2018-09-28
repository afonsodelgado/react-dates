import React from 'react';
import { storiesOf } from '@storybook/react';
import DateObj from '../src/utils/DateObj';
import {
  VERTICAL_ORIENTATION,
} from '../src/constants';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

const TestInput = props => (
  <div style={{ marginTop: 16 }}>
    <input
      {...props}
      type="text"
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px',
      }}
    />
  </div>
);

storiesOf('SingleDatePicker (SDP)', module)
  .add('default', () => (
    <SingleDatePickerWrapper />
  ))
  .add('as part of a form', () => (
    <div>
      <SingleDatePickerWrapper />
      <TestInput placeholder="Input 1" />
      <TestInput placeholder="Input 2" />
      <TestInput placeholder="Input 3" />
    </div>
  ))
  .add('non-english locale (Chinese)', () => (
    <SingleDatePickerWrapper
      placeholder="入住日期"
      monthFormat="YYYY[年]MMMM"
      phrases={{
        closeDatePicker: '关闭',
        clearDate: '清除日期',
      }}
      locale="zh-cn"
    />
  ))
  // .add('non-english locale (Persian)', () => {

  //   return (
  //     <SingleDatePickerWrapper
  //       placeholder="تقویم فارسی"
  //       renderMonthText={month => momentJalaali(month).format('jMMMM jYYYY')}
  //       renderDayContents={day => momentJalaali(day).format('jD')}
  //     />
  //   );
  // })
  .add('vertical with custom height', () => (
    <SingleDatePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      verticalHeight={568}
    />
  ));
