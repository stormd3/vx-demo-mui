import React from 'react';
import Show from '../components/shownocode';
import BarGroup from '../components/tiles/bargroup';

export default () => {
  return (
    <Show
      events={true}
      margin={{top: 80}}
      component={BarGroup}
      title="Bar Group">
    </Show>
  );
}
