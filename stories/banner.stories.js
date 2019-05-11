import React from 'react';
import { storiesOf } from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';

storiesOf('Components | Banners/Major', module)
  .add('With Only Title', () => (
    <MajorBanner title="Banner Title" photo="People Outdoors/shutterstock_116403520.jpg" />
  ))
  .add('With All Text Options', () => (
    <MajorBanner
      photo="People Outdoors/shutterstock_116403520.jpg"
      title="Banner Title"
      subtitle="Banner Subtitle"
      body="Banner Body"
    />
  ));

storiesOf('Components | Banners/Minor', module)
  .add('No Pictures', () => (
    <MinorBanner title="Banner Title" subtitle="Banner Subtitle" body="Banner Body" />
  ))
  .add('With Pictures', () => (
    <MinorBanner
      title="Banner Title"
      subtitle="Banner Subtitle"
      body="Banner Body"
      leftPhoto="Products/boots/shutterstock_66842440.jpg"
      rightPhoto="Products/boots/shutterstock_1121278055.jpg"
    />
  ));
