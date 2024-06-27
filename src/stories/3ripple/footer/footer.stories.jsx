// src/stories/O2Footer.stories.jsx

import React from 'react';
import {Footer} from './footer';
import { Text } from '../text/text'; // Adjust the path as necessary
import { List } from '../list/List'; // Adjust the path as necessary

export default {
  title: 'Footer/Footer',
  component: Footer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {

  }
};

const Template = (args) => <Footer {...args} />;

export const Default = {
  args: {
    columnOne: (
      <List >
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </List>
    ),
    columnTwo: (
      <List>
        <li>Link A</li>
        <li>Link B</li>
        <li>Link C</li>
      </List>
    ),
    columnThree: (
      <List>
        <li>Link X</li>
        <li>Link Y</li>
        <li>Link Z</li>
      </List>
    ),
    socialLinks: (
      <div>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    ),
    legals: [
      <Text key="terms">Terms & Conditions</Text>,
      <Text key="privacy">Privacy Policy</Text>,
    ],
    copyright: <Text>&copy; 2024 Company Name. All rights reserved.</Text>,
  }
}

export const WithNoSocialLinks = Template.bind({});
WithNoSocialLinks.args = {
  ...Default.args,
  socialLinks: null,
};

export const WithNoLegals = Template.bind({});
WithNoLegals.args = {
  ...Default.args,
  legals: null,
};
