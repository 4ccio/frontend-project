import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    login: { username: 'adadmin', password: '123sdasd', error: 'Неверный логин или пароль' },
})];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    login: { username: 'admin', password: '123' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    login: { username: 'admin', password: '123' },
})];
