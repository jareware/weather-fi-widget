/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import WindDirectionIcon from 'assets/wind-direction.svg';
import { FC, Fragment } from 'react';

// For reasons too boring to fully figure out, very old Safari (iOS 9) needs
// an additional transform on the wind direction indicators to display correctly.
const ANCIENT_SAFARI_FIX = true;

export const WindSymbol: FC<{
  windspeedms?: number;
  winddirection?: number;
}> = ({ windspeedms, winddirection }) => (
  <div
    className="f7 relative flex items-center justify-center"
    css={css`
      width: 1.5rem;
      height: 1.5rem;
    `}
  >
    {windspeedms !== undefined && winddirection !== undefined && (
      <Fragment>
        <img
          src={WindDirectionIcon}
          className="absolute w-100 h-100"
          css={css`
            transform: translateX(${ANCIENT_SAFARI_FIX ? -37 : 0}%)
              rotate(${winddirection + 180}deg);
          `}
          alt=""
        />
        <div>{windspeedms && Math.round(windspeedms)}</div>
      </Fragment>
    )}
  </div>
);
