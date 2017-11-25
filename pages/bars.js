import React from 'react';
import Show from '../components/shownocode';
import Bars from '../components/tiles/bars';

export default () => {
  return (
    <Show
      events
      component={Bars}
      title="Bars"
    >
    </Show>
  );
}
