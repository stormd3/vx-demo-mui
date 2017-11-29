import React from 'react';
import Dendrogram from 'components/tiles/dendrogram';
import Show from 'components/shownocode';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      title="Dendrograms"
      component={Dendrogram}
      margin={{
        top: 80,
        left: 10,
        right: 10,
        bottom: 80,
      }}
    >
    </Show>
  );
}

export default withRoot(Present);
