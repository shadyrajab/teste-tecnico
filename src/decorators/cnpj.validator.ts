import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ValidateCPFCNPJ implements ValidatorConstraintInterface {
  validate(cnpj: string) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    return cnpj.length === 14 || cnpj.length === 11;
  }
}

export function IsCPFCNPJ(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ValidateCPFCNPJ,
    });
  };
}
