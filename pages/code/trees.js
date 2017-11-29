import React from 'react';
import Tree from 'components/tiles/tree';
import Show from 'components/shownocode';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      title="Trees"
      component={Tree}
      margin={{
        top: 0,
        left: 80,
        right: 80,
        bottom: 10,
      }}
    >
    </Show>
  );
}
export default withRoot(Present);
