import { Static, Type } from '@sinclair/typebox';
import mjml2html from 'mjml';
import { MJMLParseError } from 'mjml-core';
import { Nullable } from './typebox';

export const RenderBody = Type.Object({
  mjml: Type.String(),
});
export type RenderBodyType = Static<typeof RenderBody>;

export const RenderResponse = Type.Object({
  errors: Type.Array(
    Type.Object({
      message: Type.String(),
      line: Type.Optional(Type.Number()),
    })
  ),
  html: Nullable(Type.String()),
  mjml: Type.String(),
});
export type RenderResponseType = Static<typeof RenderResponse>;

type ValidationError = Error & {
  errors: MJMLParseError[];
};

// We don't know the type of the error yet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRenderError = (e: any) => {
  if (e.errors) {
    const errors = (<ValidationError>e).errors;
    return errors.map((it: MJMLParseError) => ({
      message: it.message,
      line: it.line,
    }));
  } else if (e.message) {
    return [{ message: e.message }];
  } else {
    return [{ message: e }];
  }
};

export const render = ({ mjml }: RenderBodyType): RenderResponseType => {
  const defaultResponse = {
    errors: [],
    html: null,
    mjml,
  };

  try {
    const result = mjml2html(mjml, {
      validationLevel: 'strict',
    });

    return {
      ...defaultResponse,
      html: result.html,
    };
  } catch (e) {
    return {
      ...defaultResponse,
      errors: handleRenderError(e),
    };
  }
};
