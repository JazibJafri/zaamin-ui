import Config from 'react-native-config';

/**
 *
 * @param message The message that logs to the console
 * @param defaultValue Custom identifier for message
 * @example
 * outputToConsole(someVar, 'Value is')
 * //prints --> Value is::: someVar
 *
 */
export const outputToConsole = (message: unknown, defaultValue?: string) => {
    if (Config.ENV === 'development')
        console.log(
            '\x1b[33m%s\x1b[0m', //custom colored logs
            defaultValue?.toUpperCase() || 'PRINT',
            `:::${JSON.stringify(message)}`,
        );
};
