import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    theme: ThemeButton.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    children: 'Button',
    theme: ThemeButton.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    theme: ThemeButton.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button',
    theme: ThemeButton.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Text = Template.bind({});
Text.args = {
    children: 'Button',
    theme: ThemeButton.TEXT,
};

export const TextDark = Template.bind({});
TextDark.args = {
    children: 'Button',
    theme: ThemeButton.TEXT,
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Backless = Template.bind({});
Backless.args = {
    children: 'Button',
    theme: ThemeButton.BACKLESS,
};

export const BacklessDark = Template.bind({});
BacklessDark.args = {
    children: 'Button',
    theme: ThemeButton.BACKLESS,
};
BacklessDark.decorators = [ThemeDecorator(Theme.DARK)];
