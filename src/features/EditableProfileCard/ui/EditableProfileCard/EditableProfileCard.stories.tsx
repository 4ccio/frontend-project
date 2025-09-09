import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import avatar from 'shared/assets/tests/avatar.png';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const userData = {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Пушкин',
    first: 'Александр',
    city: 'Петербург',
    currency: Currency.RUB,
    avatar,
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ editableProfile: { data: userData, readonly: true } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ editableProfile: { data: userData, readonly: true } })];

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [StoreDecorator({ editableProfile: { data: userData, readonly: false } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ editableProfile: { data: userData, readonly: false, isLoading: true } })];
