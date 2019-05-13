import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';

storiesOf('Components | Banners/Major', module)
  .addParameters({
    info: {
      text: `
        ### When to Use
        This banner should be used, at most, once per page. When it is used, it should be placed at the top of the page, below the navigation bar. This banner is considered "Shouting", the focus is to grab the attention of the user before they have a chance to see anything else.
        ___
        **Location:**  1st element below navigation

        **Max Quantity:** 1

        **See Also:** Minor Banner
      `,
    },
  })
  .add('With Only Title', () => (
    <MajorBanner title="Banner Title" photo="People Outdoors/shutterstock_116403520.jpg" />
  ))
  .add('With All Text Options', () => {
    const title = text('Title', 'Banner Title');
    return (
      <MajorBanner
        photo="People Outdoors/shutterstock_116403520.jpg"
        title={title}
        subtitle="Banner Subtitle"
        body="Banner Body"
      />
    );
  });

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
