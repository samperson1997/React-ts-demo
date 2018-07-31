type Dictionary<T> = Partial<{ [key: string]: Readonly<T> }>;

export function classCombine(...classNames: Dictionary<boolean>[]) {
    const classes: string[] = [];
    classNames.forEach((classname) => {
        if (classname) {
            for (const key in classname) {
                if (classname.hasOwnProperty(key) && classname[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
}
