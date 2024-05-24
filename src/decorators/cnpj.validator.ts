import { 
    registerDecorator, 
    ValidationOptions, 
    ValidatorConstraint, 
    ValidatorConstraintInterface 
} from 'class-validator';


@ValidatorConstraint({ async: false })
export class ValidateCPFCNPJ implements ValidatorConstraintInterface {
    validate(cnpj: string) {
        if (!cnpj) return false
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj.length !== 14 && cnpj.length !== 11) return false

        return true
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
  