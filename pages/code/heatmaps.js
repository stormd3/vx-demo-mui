import React from 'react';
import Show from 'components/show';
import Heatmap from 'components/tiles/heatmap';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      margin={{
        top: 10,
        left: 40,
        right: 30,
        bottom: 80,
      }}
      component={Heatmap}
      title="Heatmaps"
    >
    </Show>
  );
}
export default withRoot(Present);
