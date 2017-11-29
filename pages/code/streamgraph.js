import React from 'react';
import Show from 'components/shownocode';
import Streamgraph from 'components/tiles/streamgraph';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      component={Streamgraph}
      title="Streamgraph"
      margin={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 10,
      }}
    >
    </Show>
  );
};
export default withRoot(Present);
