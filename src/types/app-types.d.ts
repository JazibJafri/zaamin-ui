declare interface Font {
    name: string;
    family: {
        [key in FontFamily]?: string;
    };
    size: {
        [key in FontTypes]?: number;
    };
}

declare type FontTypes = 'small' | 'medium' | 'large' | 'huge';

declare type FontFamily =
    | 'BOLD'
    | 'SEMIBOLD'
    | 'MEDIUM'
    | 'REGULAR'
    | 'LIGHT'
    | 'EXTRALIGHT';

/* For state created by useReducer hook */
declare type HandleStateChange<S = {}> = (value: string, property: keyof S) => void;

declare type HandleSubmit = () => void;
