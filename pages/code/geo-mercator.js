import React from 'react';
import Show from 'components/shownocode';
import GeoMercator from 'components/tiles/geo-mercator';
import withRoot from 'docs/src/modules/components/withRoot';

function Present() {
  return (
    <Show
      events
      component={GeoMercator}
      title="Geo Mercator"
    >
    </Show>
  );
};

export default withRoot(Present);
