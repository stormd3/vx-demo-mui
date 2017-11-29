import React from 'react';
import Show from 'components/shownocode';
import BoxPlot from 'components/tiles/boxplot';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events={true}
      margin={{ top: 80 }}
      component={BoxPlot}
      title="BoxPlot With ViolinPlot"
    >
    </Show>
  );
};

export default withRoot(Present);
