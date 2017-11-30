import React from 'react';
import Show from 'components/shownocode';
import Pack from 'components/tiles/pack';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Pack} title="Pack">
    </Show>
  );
};
export default withRoot(Present);
