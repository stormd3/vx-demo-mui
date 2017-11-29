import React from 'react';
import Show from 'components/shownocode';
import Dots from 'components/tiles/dots';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Dots} title="Dots">
    </Show>
  );
};

export default withRoot(Present);
