import React from 'react';
import Show from 'components/shownocode';
import StackedAreas from 'components/tiles/stacked';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={StackedAreas} title="Stacked Areas" margin={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 10,
    }}>
    </Show>
  );
}
export default withRoot(Present);
