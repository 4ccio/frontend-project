import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames(
            'someClass',
            {},
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with mods true', () => {
        const expected = 'someClass cls1 cls2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
    test('with empty string', () => {
        const expected = '';
        expect(classNames('')).toBe(expected);
    });
});
