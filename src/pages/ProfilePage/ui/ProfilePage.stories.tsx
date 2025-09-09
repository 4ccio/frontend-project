import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import avatar from 'shared/assets/tests/avatar.png';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const userData = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
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
