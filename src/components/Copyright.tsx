/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';

export const Copyright: FC = () => (
  <a
    className="mt2 self-start color-inherit link hover-gray"
    css={css`
      font-size: 0.5rem;
    `}
    href="https://en.ilmatieteenlaitos.fi/open-data-licence"
    target="_blank"
    rel="noreferrer noopener"
  >
    ©&nbsp;Ilmatieteen laitos
  </a>
);
