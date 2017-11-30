// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import pure from 'recompose/pure';
import wrapDisplayName from 'recompose/wrapDisplayName';
import AppWrapper from 'docs/src/modules/components/AppWrapper';
import findPages from /* preval */ 'docs/src/modules/utils/findPages';
import { loadCSS } from 'fg-loadcss/src/loadCSS';

if (process.browser) {
  loadCSS(
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    document.querySelector('#insertion-point-jss'),
  );
}

/*
the categories code, nocode and special are purely arbitrary
and are here mainly to show how findPages works for other
projects that might want to use the findPage functionality.

code comes first in the directory structure so its ZERO
special comes second in the directory structure so its ONE
when you check the findPages code you will see that
code and special are hardcoded into the function.

Eventually this should be fixed but for now that is how
the folks at material-ui are using the function

nocode does not need to be in the findPages code as all of the paths
in the nocode are defined here.  findPages removes the
need to put the absolute paths in this file like they
are for the nocode directory.
*/

const pages = [
  {
    ...findPages[0],
    title: 'Code',
  },
  {
    ...findPages[1],
    title: 'Special',
  },
  {
    pathname: '/nocode',
    children: [
      {
        pathname: '/nocode/areas',
      },
      {
        pathname: '/nocode/axis',
      },
      {
        pathname: '/nocode/bargroup',
      },
      {
        pathname: '/nocode/bars',
      },
      {
        pathname: '/nocode/barstackhorizontal',
      },
      {
        pathname: '/nocode/pies',
      },
      {
        pathname: '/nocode/responsive',
      },
    ],
  },
  {
    pathname: '/',
    title: false,
  },
];

function findActivePage(currentPages, url) {
  const activePage = find(currentPages, page => {
    if (page.children) {
      return url.pathname.indexOf(page.pathname) !== -1;
    }

    // Should be an exact match if no children
    return url.pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  }

  // We need to drill down
  if (activePage.pathname !== url.pathname) {
    return findActivePage(activePage.children, url);
  }

  return activePage;
}

function withRoot(BaseComponent) {
  // Prevent rerendering
  const PureBaseComponent = pure(BaseComponent);

  type WithRootProps = {
    sheetsRegistry?: Object,
    url: Object,
  };

  class WithRoot extends React.Component<WithRootProps> {
    static childContextTypes = {
      url: PropTypes.object,
      pages: PropTypes.array,
      activePage: PropTypes.object,
    };

    static getInitialProps(ctx) {
      let initialProps = {};

      if (BaseComponent.getInitialProps) {
        const baseComponentInitialProps = BaseComponent.getInitialProps({ ...ctx });
        initialProps = {
          ...baseComponentInitialProps,
          ...initialProps,
        };
      }

      if (process.browser) {
        return initialProps;
      }

      return {
        ...initialProps,
      };
    }

    constructor(props, context) {
      super(props, context);
    }

    getChildContext() {
      return {
        url: this.props.url ? this.props.url : null,
        pages,
        activePage: findActivePage(pages, this.props.url),
      };
    }

    render() {
      const { sheetsRegistry, ...other } = this.props;

      return (
        <AppWrapper sheetsRegistry={sheetsRegistry}>
          <PureBaseComponent initialProps={other} />
        </AppWrapper>
      );
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

export default withRoot;
