import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('mainClass')).toBe('mainClass');
    });

    test('with additional classes', () => {
        const expectedResult = 'mainClass class1 class2';
        expect(classNames('mainClass', {}, ['class1', 'class2'])).toBe(expectedResult);
    });

    test('with modes', () => {
        const expectedResult = 'mainClass class1 class2 hovered scrollable';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expectedResult);
    });

    test('with modes false', () => {
        const expectedResult = 'mainClass class1 class2 hovered';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expectedResult);
    });

    test('with modes undefined', () => {
        const expectedResult = 'mainClass class1 class2 hovered';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expectedResult);
    });
});
