import React from 'react';
import Show from 'components/shownocode';
import Pie from 'components/tiles/pie';
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
      component={Pie}
      title="Pies"
    >
    </Show>
  );
};

export default withRoot(Present);
