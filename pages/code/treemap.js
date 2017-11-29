import React from 'react';
import Show from 'components/shownocode';
import Treemap from 'components/tiles/treemap';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Treemap} title="Treemap">
    </Show>
  );
};
export default withRoot(Present);
