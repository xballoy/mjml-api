export const VALID_MJML = `
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>
          Hello World!
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export const INVALID_MJML_NOT_MJML = ``;
export const INVALID_MJML_INVALID_TAG = `
<mjml>
  <invalid-tag />
  <another-invalid-tag />
</mjml>
`;
