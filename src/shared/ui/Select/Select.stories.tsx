import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select, SelectSize } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <div className="center-story">
        <Select {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            value: '1',
            label: 'option1',
        },
        {
            value: '2',
            label: 'option2',
        },
    ],
};

// export const DefaultDark = Template.bind({});
// DefaultDark.args = {
//
// };
// DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
