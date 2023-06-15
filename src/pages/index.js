import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Hero from 'sections/hero';
import Introduction from 'sections/introduction';
import CoreValues from 'sections/core-values';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Medical Missionaries of Mary" />
        <Hero />
        <Banner />
        <Introduction />
        <CoreValues />
      </Layout>
    </ThemeProvider>
  );
}
