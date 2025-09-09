import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country, Currency } from 'shared/const/common';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/tests/avatar.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    profileData: {
        username: 'login',
        age: 22,
        country: Country.Russia,
        lastname: 'Иванов',
        first: 'Иван',
        city: 'Москва',
        currency: Currency.USD,
        avatar,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    profileData: {
        username: 'login',
        age: 22,
        country: Country.Russia,
        lastname: 'Иванов',
        first: 'Иван',
        city: 'Москва',
        currency: Currency.USD,
        avatar,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Empty = Template.bind({});
Empty.args = {
    profileData: {},
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
