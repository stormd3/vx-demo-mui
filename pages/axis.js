import React from 'react';
import Show from '../components/shownocode';
import Axis from '../components/tiles/axis';

export default () => {
  return (
    <Show
      component={Axis}
      title="Axis"
      margin={{
        top: 20,
        left: 60,
        right: 40,
        bottom: 60,
      }}
    >
    </Show>
  );
};
