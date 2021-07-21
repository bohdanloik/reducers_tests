import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from '@storybook/addon-actions';
import { EditableSpan } from '../EditableSpan';

export default {
  title: 'Example/EditableSpan',
  component: EditableSpan,
}


export const EditableSpanExmple = (props: any) => {
    return(<EditableSpan value={'Start value'} onChange={action('value changed')} />
    )
}
