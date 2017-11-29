import React from 'react';
import Show from 'components/shownocode';
import Lines from 'components/tiles/lines';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Lines} title="Lines">
    </Show>
  );
}
export default withRoot(Present);
