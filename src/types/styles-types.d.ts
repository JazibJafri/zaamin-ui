declare module '*.scss' {
    // eslint-disable-next-line init-declarations
    const content: { [className: string]: string };
    export = content;
}
