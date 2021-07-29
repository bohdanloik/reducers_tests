import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { AddItemForm } from '../AddItemForm';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Example/AddItemForm',
  component: AddItemForm,
}
export const ExmpleAddItemForm = (props: any) => {
    return(<AddItemForm addItem={action('Button inside form clicked')} />
    )
}
export {};