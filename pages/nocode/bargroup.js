import React from 'react';
import Show from 'components/shownocode';
import BarGroup from 'components/tiles/bargroup';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events={true}
      margin={{top: 80}}
      component={BarGroup}
      title="Bar Group">
    </Show>
  );
}

export default withRoot(Present);
