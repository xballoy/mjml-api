import { Type, TSchema, TUnion, TNull } from '@sinclair/typebox';

export const Nullable = <T extends TSchema>(type: T): TUnion<[T, TNull]> => Type.Union([type, Type.Null()]);
