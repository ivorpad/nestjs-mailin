import { SetMetadata } from '@nestjs/common';

export const PATTERN_META_KEY = Symbol('mailin::pattern');

export const OnPattern = (...args: string[]): MethodDecorator => {
    return (
      target: object,
      key: string | symbol,
      descriptor: TypedPropertyDescriptor<any>,
    ) => {
      SetMetadata(PATTERN_META_KEY, args)(descriptor.value);
      return descriptor
    };
};