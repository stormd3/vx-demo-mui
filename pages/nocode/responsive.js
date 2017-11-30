import React from 'react';
import Show from 'components/shownocode';
import Responsive from 'components/tiles/responsive';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Responsive} title="Responsive">
    </Show>
  );
};

export default withRoot(Present);
