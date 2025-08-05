import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input, InputSize } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <div className="center-story">
        <Input placeholder="Text input" {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    className: 'pseudo-hover',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Warning = Template.bind({});
Warning.args = {
    warning: true,
};

export const WarningDark = Template.bind({});
WarningDark.args = {
    warning: true,
};
WarningDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    error: true,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    error: true,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Sizes = () => (
    <div className="center-story">
        <Input placeholder="Small" size={InputSize.SMALL} />
        <Input placeholder="Medium" size={InputSize.MEDIUM} />
        <Input placeholder="Large" size={InputSize.LARGE} />
    </div>
);
