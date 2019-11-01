import _ from 'lodash';


export const isRequired =  (value: null|undefined|string|number) => _.isNil(value) ? 'Required Field' : undefined;

export const isEmail = (email: string) =>	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? 'Invalid Email' : undefined;


