import React from 'react';
import Show from 'components/shownocode';
import LineRadial from 'components/tiles/lineradial';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={LineRadial} title="Line Radial">
    </Show>
  );
}
export default withRoot(Present);
