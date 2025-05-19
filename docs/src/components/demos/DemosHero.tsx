import * as React from 'react';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';

export default function DemosHero() {
  return (
    <Section cozy>
      <SectionHeadline
        alwaysCenter
        overline="Demos"
        title={
          <Typography variant="h2" component="h1">
            MUI products <GradientText>in action.</GradientText>
          </Typography>
        }
        description="Explore our interactive examples inspired by real applications."
      />
    </Section>
  );
}
