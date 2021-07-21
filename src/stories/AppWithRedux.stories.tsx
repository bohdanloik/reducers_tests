import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from '@storybook/addon-actions';
import AppWithRedux from '../AppWithRedux';

export default {
  title: 'Example/AppWithRedux',
  component: AppWithRedux,
}


export const AppWithReduxExmple = (props: any) => {
    return(<AppWithRedux />
    )
}
