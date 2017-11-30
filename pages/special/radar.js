import React from 'react';
import Show from 'components/shownocode';
import Radar from 'components/tiles/radar';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Radar} title="Radar">
    </Show>
  );
};

export default withRoot(Present);
