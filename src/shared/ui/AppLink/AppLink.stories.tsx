import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Text',
    theme: AppLinkTheme.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    children: 'Text',
    theme: AppLinkTheme.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
