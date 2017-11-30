import React from 'react';
import Show from 'components/shownocode';
import BarStackHorizontal from 'components/tiles/barstackhorizontal';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      margin={{
        top: 80,
        left: 80,
        right: 40,
        bottom: 100,
      }}
      component={BarStackHorizontal}
      title="Bar Stack Horizontal"
    >
    </Show>
  );
};

export default withRoot(Present);
