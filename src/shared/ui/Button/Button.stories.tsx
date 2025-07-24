import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { House } from 'lucide-react';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div className="center-story">
        <Button {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    theme: ButtonTheme.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    children: 'Button',
    theme: ButtonTheme.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Text = Template.bind({});
Text.args = {
    children: 'Button',
    theme: ButtonTheme.TEXT,
};

export const TextDark = Template.bind({});
TextDark.args = {
    children: 'Button',
    theme: ButtonTheme.TEXT,
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Backless = Template.bind({});
Backless.args = {
    children: 'Button',
    theme: ButtonTheme.BACKLESS,
};

export const BacklessDark = Template.bind({});
BacklessDark.args = {
    children: 'Button',
    theme: ButtonTheme.BACKLESS,
};
BacklessDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithIcons = () => (
    <div className="center-story">
        <Button theme={ButtonTheme.DEFAULT} icon={<House />}>
            Default with icon
        </Button>
        <Button theme={ButtonTheme.PRIMARY} icon={<House />}>
            Primary with icon
        </Button>
        <Button theme={ButtonTheme.TEXT} icon={<House />}>
            Text with icon
        </Button>
        <Button theme={ButtonTheme.BACKLESS} icon={<House />}>
            Backless with icon
        </Button>
    </div>
);

export const WithIconsDark = () => (
    <div className="center-story">
        <Button theme={ButtonTheme.DEFAULT} icon={<House />}>
            Default with icon
        </Button>
        <Button theme={ButtonTheme.PRIMARY} icon={<House />}>
            Primary with icon
        </Button>
        <Button theme={ButtonTheme.TEXT} icon={<House />}>
            Text with icon
        </Button>
        <Button theme={ButtonTheme.BACKLESS} icon={<House />}>
            Backless with icon
        </Button>
    </div>
);
WithIconsDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Sizes = () => (
    <div className="center-story">
        <Button size={ButtonSize.SMALL} theme={ButtonTheme.DEFAULT}>
            Small
        </Button>
        <Button size={ButtonSize.MEDIUM} theme={ButtonTheme.DEFAULT}>
            Medium
        </Button>
        <Button size={ButtonSize.LARGE} theme={ButtonTheme.DEFAULT}>
            Large
        </Button>
    </div>
);

export const SizesWithIcon = () => (
    <div className="center-story">
        <Button size={ButtonSize.SMALL} icon={<House />} theme={ButtonTheme.DEFAULT}>
            Small
        </Button>
        <Button size={ButtonSize.MEDIUM} icon={<House />} theme={ButtonTheme.DEFAULT}>
            Medium
        </Button>
        <Button size={ButtonSize.LARGE} icon={<House />} theme={ButtonTheme.DEFAULT}>
            Large
        </Button>
    </div>
);
