import React from 'react';
import Show from 'components/shownocode';
import Axis from 'components/tiles/axis';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
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

export default withRoot(Present);
