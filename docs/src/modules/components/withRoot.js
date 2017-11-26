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

const pages = [
  {
    ...findPages[1],
    title: 'Component Demos',
  },
  {
    ...findPages[0],
    title: 'Component API',
  },
  {
    pathname: '/discover-more',
    children: [
      {
        pathname: '/discover-more/installation',
      },
      {
        pathname: '/discover-more/vision',
      },
      {
        pathname: '/discover-more/community',
      },
      {
        pathname: '/discover-more/showcase',
      },
      {
        pathname: '/discover-more/related-projects',
      },
      {
        pathname: '/discover-more/roadmap',
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
