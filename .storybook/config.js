import { addParameters, configure, addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

import crfTheme from './crfTheme';

import "../bootstrap-reboot.min.css"
import "../bootstrap.css"
import "../bootstrap-grid.css"
import '../main.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: crfTheme
  }
})

addDecorator(withInfo({
  inline: true
}));

addDecorator(withKnobs);

configure(loadStories, module);
