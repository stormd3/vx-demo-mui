import React from 'react';
import Show from 'components/show';
import Legends from 'components/tiles/legends';
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
      component={Legends}
      title="Legends"
    >
    </Show>
  );
};

export default withRoot(Present);
