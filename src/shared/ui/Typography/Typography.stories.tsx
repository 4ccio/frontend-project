import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Typography, TypographyColor } from './Typography';

export default {
    title: 'shared/Typography',
    component: Typography,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['h1', 'h2', 'h3', 'p', 'span'],
        },
        color: {
            control: { type: 'select' },
            options: Object.values(TypographyColor),
        },
        align: {
            control: { type: 'radio' },
            options: ['left', 'center', 'right', 'justify'],
        },
        gutterBottom: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

const HeadingsTemplate: ComponentStory<typeof Typography> = () => (
    <div>
        <Typography gutterBottom variant="h1">Заголовок H1</Typography>
        <Typography variant="h2">Заголовок H2</Typography>
        <Typography variant="h3">Заголовок H3</Typography>
    </div>
);
export const HeadingsLight = HeadingsTemplate.bind({});
export const HeadingsDark = HeadingsTemplate.bind({});
HeadingsDark.decorators = [ThemeDecorator(Theme.DARK)];

const ColorsAndAlignTemplate: ComponentStory<typeof Typography> = () => (
    <div>
        <Typography variant="p" align="left" color={TypographyColor.PRIMARY}>Параграф с цветом PRIMARY и выравниванием по левому краю</Typography>
        <Typography variant="p" align="center" color={TypographyColor.SECONDARY}>Параграф с цветом SECONDARY и выравниванием по центру.</Typography>
        <Typography variant="p" align="right" color={TypographyColor.SECONDARY_LOW}>Параграф с цветом SECONDARY_LOW и выравниванием по правому.</Typography>
        <Typography color={TypographyColor.ERROR}>span с цветом ERROR</Typography>
        <Typography color={TypographyColor.WARNING}>span с цветом WARNING</Typography>
    </div>
);
export const ColorsAndAlignLight = ColorsAndAlignTemplate.bind({});
export const ColorsAndAlignDark = ColorsAndAlignTemplate.bind({});
ColorsAndAlignDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Playground = Template.bind({});
Playground.args = {
    children: 'Playground text',
    variant: 'p',
    color: TypographyColor.PRIMARY,
    align: 'left',
    gutterBottom: true,
};
