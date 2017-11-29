import React from 'react';
import Show from 'components/shownocode';
import Network from 'components/tiles/network';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Network} title="Network">
    </Show>
  );
}
export default withRoot(Present);
