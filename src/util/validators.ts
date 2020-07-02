/* eslint-disable no-useless-escape */
import {
    INVALID_EMAIL_FORMAT,
    VALIDATION_PASSED,
    FIELD_IS_REQUIRED,
    INVALID_PHONE,
} from 'constants/text';

type ValidatorResult = {
    result: boolean;
    reason: string;
};

const basicValidator = (value: string): ValidatorResult => {
    const result = value.length > 0;
    return {
        result,
        reason: result ? `Basic ${VALIDATION_PASSED}` : FIELD_IS_REQUIRED,
    };
};
const emailValidator = (value: string): ValidatorResult => {
    const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    // eslint-disable-next-line max-len
    // const result = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    //     value,
    // );
    return {
        result,
        reason: result ? `Email ${VALIDATION_PASSED}` : INVALID_EMAIL_FORMAT,
    };
};

const phoneValidator = (value: string): ValidatorResult => {
    // const result = /^([0-9]+)*$/.test(value);
    const result = /^(03[0-9]{9}|\+92[0-9]{10})$/g.test(value);
    // eslint-disable-next-line max-len
    // const result = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    //     value,
    // );
    return {
        result,
        reason: result ? `Phone ${VALIDATION_PASSED}` : INVALID_PHONE,
    };
};

export const validators = {
    email: emailValidator,
    basic: basicValidator,
    phone: phoneValidator,
};

export type Validators = keyof typeof validators;
