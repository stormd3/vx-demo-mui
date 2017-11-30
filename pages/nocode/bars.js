import React from 'react';
import Show from 'components/shownocode';
import Bars from 'components/tiles/bars';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      component={Bars}
      title="Bars"
    >
    </Show>
  );
}

export default withRoot(Present);
