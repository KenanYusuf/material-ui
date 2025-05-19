import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import DemosHero from 'docs/src/components/demos/DemosHero';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function Pricing() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Demos - MUI"
        description="TODO" // TODO
        card="/static/social-previews/demos-preview.jpg" // TODO
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <DemosHero />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
