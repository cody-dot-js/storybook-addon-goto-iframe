import React from 'react';
import addons from '@storybook/addons';
import Panel from './components/panel/Panel';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './constants';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: ADDON_TITLE,
    render: () => <Panel api={api} />,
  });
});
