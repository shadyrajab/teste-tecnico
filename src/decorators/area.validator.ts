import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ValidateArea implements ValidatorConstraintInterface {
  validate(areaFazenda: number, args: ValidationArguments) {
    const object: any = args.object;
    return areaFazenda >= object.areaAgricultavel + object.areaVegetacao;
  }
}

export function IsValidArea(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ValidateArea,
    });
  };
}
