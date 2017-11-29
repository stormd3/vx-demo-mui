import React from 'react';
import Show from 'components/shownocode';
import BarStack from 'components/tiles/barstack';

import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show events margin={{ top: 80 }} component={BarStack} title="Bar Stack">
    </Show>
  );
};

export default withRoot(Present);
