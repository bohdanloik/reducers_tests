import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from '@storybook/addon-actions';
import AppWithRedux from '../AppWithRedux';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator';

export default {
  title: 'Example/AppWithRedux',
  component: AppWithRedux,
  decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxExmple = (props: any) => {
    return <AppWithRedux /> 
}
