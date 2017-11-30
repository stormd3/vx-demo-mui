import React from 'react';
import Show from 'components/shownocode';
import VoronoiChart from 'components/charts/VoronoiChart';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      margin={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      component={VoronoiChart}
      title="VoronoiChart with mouseover"
    >
    </Show>
  );
}

export default withRoot(Present);
