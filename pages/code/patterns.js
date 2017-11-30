import React from 'react';
import Show from 'components/shownocode';
import Patterns from 'components/tiles/patterns';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Patterns} title="Patterns" margin={{
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    }}>
    </Show>
  );
}
export default withRoot(Present);
