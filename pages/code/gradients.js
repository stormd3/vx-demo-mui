import React from 'react';
import Show from 'components/shownocode';
import Gradients from 'components/tiles/gradients';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      component={Gradients}
      title="Gradients"
      shadow
      margin={{
        bottom: 0,
      }}
    >
    </Show>
  );
};
export default withRoot(Present);
