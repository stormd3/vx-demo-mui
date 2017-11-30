import React from 'react';
import Show from 'components/shownocode';
import Areas from 'components/tiles/area';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      component={Areas}
      title="Areas"
      margin={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
    </Show>
  );
};

export default withRoot(Present);
