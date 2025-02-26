type Modes = Record<string, string | boolean>;

export function classNames(cls: string, modes: Modes = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className)
    ]
        .join(' ');
}