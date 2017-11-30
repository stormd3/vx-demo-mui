import React from 'react';
import Show from 'components/shownocode';
import Glyphs from 'components/tiles/multiline';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show component={Glyphs} title="Glyphs" margin={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
    </Show>
  );
}
export default withRoot(Present);
