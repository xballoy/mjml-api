import { render, RenderBodyType } from './render';
import { INVALID_MJML_INVALID_TAG, INVALID_MJML_NOT_MJML, VALID_MJML } from './mjml.mock';

describe('Render Service', () => {
  let input: RenderBodyType;

  describe('when valid MJML', () => {
    beforeEach(() => {
      input = {
        mjml: VALID_MJML,
      };
    });

    it('should return MJML markup used', () => {
      const result = render(input);

      expect(result.mjml).toEqual(VALID_MJML);
    });

    it('should return rendered HTML', () => {
      const result = render(input);

      expect(result.html).toMatchSnapshot();
    });

    it('should have no error', () => {
      const result = render(input);

      expect(result.errors).toHaveLength(0);
    });
  });

  describe('when invalid MJML', () => {
    describe('not mjml', () => {
      beforeEach(() => {
        input = {
          mjml: INVALID_MJML_NOT_MJML,
        };
      });

      it('should return MJML markup used', () => {
        const result = render(input);

        expect(result.mjml).toEqual(INVALID_MJML_NOT_MJML);
      });

      it('should return rendered HTML', () => {
        const result = render(input);

        expect(result.html).toBeNull();
      });

      it('should have no error', () => {
        const result = render(input);

        expect(result.errors).toEqual([
          {
            message: 'Parsing failed. Check your mjml.',
          },
        ]);
      });
    });

    describe('invalid tags', () => {
      beforeEach(() => {
        input = {
          mjml: INVALID_MJML_INVALID_TAG,
        };
      });

      it('should return MJML markup used', () => {
        const result = render(input);

        expect(result.mjml).toEqual(INVALID_MJML_INVALID_TAG);
      });

      it('should return rendered HTML', () => {
        const result = render(input);

        expect(result.html).toBeNull();
      });

      it('should have no error', () => {
        const result = render(input);

        expect(result.errors).toEqual([
          {
            line: 3,
            message: "Element invalid-tag doesn't exist or is not registered",
          },
          {
            line: 4,
            message: "Element another-invalid-tag doesn't exist or is not registered",
          },
        ]);
      });
    });
  });
});
