import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from '@storybook/addon-actions';
import AppWithRedux from '../AppWithRedux';
import { Provider } from 'react-redux';
import { store } from '../state/store';

export default {
  title: 'Example/AppWithRedux',
  component: AppWithRedux,
}


export const AppWithReduxExmple = (props: any) => {
    return (<Provider store={store}> <AppWithRedux /> </Provider>)
}
