import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Flex.module.scss';

// This component is a 1-1 mapping to css flex, do not add anything fancy here :)
// Only "standard" widths (4-8-16-32) should be defined here, other widths should be added as className

export type FlexProps = {
  id?: string;
  vertical?: boolean;
  horizontalReverse?: boolean;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
  pointer?: boolean;
  name?: string; // Name of the flex to be able to identify it in the dom
  dataCy?: string;

  inline?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  grow1?: boolean;
  basis0?: boolean;
  shrink0?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  center?: boolean;
  rightAlign?: boolean;
  marginLeftAuto?: boolean; // This is used to right align self inside a parent flex in cases there are no left items
  alignEnd?: boolean;
  alignStart?: boolean;
  alignStretch?: boolean;
  alignTextCenter?: boolean;
  hidden?: boolean;
  displayNone?: boolean;
  highlight?: boolean;
  gap4?: boolean;
  gap8?: boolean;
  gap16?: boolean;
  gap24?: boolean;
  gap32?: boolean;
  gap4x8?: boolean;
  rowGap4?: boolean;
  overflowAuto?: boolean;
  // We should try to use most padding (not margin) and let parent control margin
  padding4?: boolean;
  padding8?: boolean;
  padding16?: boolean;
  padding32?: boolean;
  paddingBottom4?: boolean;
  paddingBottom8?: boolean;
  paddingBottom16?: boolean;
  paddingBottom24?: boolean;
  paddingBottom32?: boolean;
  paddingLeft4?: boolean;
  paddingLeft8?: boolean;
  paddingLeft16?: boolean;
  paddingLeftRight16?: boolean;
  paddingLeftRight24?: boolean;
  paddingRight4?: boolean;
  paddingRight8?: boolean;
  paddingRight16?: boolean;
  paddingRight24?: boolean;
  paddingTop4?: boolean;
  paddingTop8?: boolean;
  paddingTop16?: boolean;
  paddingTopBottom4?: boolean;
  paddingTopBottom8?: boolean;
  positionRelative?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
  maxWidth100?: boolean;
  minWidth0?: boolean;
  minHeight0?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
  grayBackground?: boolean;
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({
  children,
  title,
  onClick,
  onDoubleClick,
  pointer,
  name,
  dataCy,
  inline = false,
  vertical = false,
  horizontalReverse = false,
  spaceBetween = false,
  spaceAround = false,
  center = false,
  alignEnd = false,
  alignStart = false,
  alignStretch = false,
  alignTextCenter = false,
  rightAlign = false,
  marginLeftAuto = false,
  hidden = false,
  displayNone = false,
  highlight = false,
  gap4 = false,
  gap8 = false,
  gap16 = false,
  gap24 = false,
  gap32 = false,
  gap4x8 = false,
  rowGap4 = false,
  overflowAuto = false,
  padding4 = false,
  padding8 = false,
  padding16 = false,
  padding32 = false,
  paddingBottom4 = false,
  paddingBottom8 = false,
  paddingBottom16 = false,
  paddingBottom24 = false,
  paddingBottom32 = false,
  paddingLeft4 = false,
  paddingLeft8 = false,
  paddingLeft16 = false,
  paddingLeftRight16 = false,
  paddingLeftRight24 = false,
  paddingRight4 = false,
  paddingRight8 = false,
  paddingRight16 = false,
  paddingRight24 = false,
  paddingTop4 = false,
  paddingTop8 = false,
  paddingTop16 = false,
  paddingTopBottom4 = false,
  paddingTopBottom8 = false,
  positionRelative = false,
  wrap = false,
  wrapReverse = false,
  fullWidth = false,
  fullHeight = false,
  grow1 = false,
  basis0 = false,
  shrink0 = false,
  maxWidth100 = false,
  minWidth0 = false,
  minHeight0 = false,
  grayBackground = false,
  className,
  ...restProps }, ref) => {
  let direction = styles.horizontal; // We should call it row and column as in css
  direction = vertical ? styles.vertical : direction;
  direction = horizontalReverse ? styles.horizontalReverse : direction;

  const allClassNames = classNames(
    className,
    !inline && styles.flex,
    inline && styles.inlineFlex,
    direction,
    (!!onClick || pointer) && styles['cursor-pointer'],
    spaceBetween && styles.spaceBetween,
    spaceAround && styles.spaceAround,
    center && styles.center,
    marginLeftAuto && styles.marginLeftAuto,
    rightAlign && styles['right-align'],
    alignEnd && styles['align-end'],
    alignStart && styles['align-start'],
    alignStretch && styles['align-stretch'],
    alignTextCenter && styles['align-center'],
    hidden && styles.hidden,
    highlight && styles.highlight,
    gap4 && styles['gap-4'],
    gap8 && styles['gap-8'],
    gap16 && styles['gap-16'],
    gap24 && styles['gap-24'],
    gap32 && styles['gap-32'],
    gap4x8 && styles['gap-4x8'],
    rowGap4 && styles.rowGap4,
    wrap && styles.wrap,
    wrapReverse && styles.wrapReverse,
    fullWidth && styles['full-width'],
    minWidth0 && styles.minWidth0,
    minHeight0 && styles.minHeight0,
    maxWidth100 && styles.maxWidth100,
    fullHeight && styles['full-height'],
    grow1 && styles.grow1,
    basis0 && styles.basis0,
    shrink0 && styles.shrink0,
    overflowAuto && styles.overflowAuto,
    padding4 && styles['padding-4'],
    padding8 && styles['padding-8'],
    padding16 && styles['padding-16'],
    padding32 && styles['padding-32'],
    paddingBottom4 && styles['padding-bottom-4'],
    paddingBottom8 && styles['padding-bottom-8'],
    paddingBottom16 && styles['padding-bottom-16'],
    paddingBottom24 && styles['padding-bottom-24'],
    paddingBottom32 && styles['padding-bottom-32'],
    paddingLeft4 && styles['padding-left-4'],
    paddingLeft8 && styles['padding-left-8'],
    paddingLeft16 && styles['padding-left-16'],
    paddingLeftRight16 && styles.paddingLeftRight16,
    paddingLeftRight24 && styles.paddingLeftRight24,
    paddingRight4 && styles['padding-right-4'],
    paddingRight8 && styles['padding-right-8'],
    paddingRight16 && styles['padding-right-16'],
    paddingRight24 && styles['padding-right-24'],
    paddingTop4 && styles['padding-top-4'],
    paddingTop8 && styles['padding-top-8'],
    paddingTop16 && styles['padding-top-16'],
    paddingTopBottom4 && styles['padding-bottom-4'],
    paddingTopBottom8 && styles['padding-bottom-8'],
    positionRelative && styles.positionRelative,
    displayNone && styles.displayNone,
    grayBackground && styles['gray-background']
  );

  return (
    <div
      data-cy={dataCy}
      ref={ref}
      data-name={name}
      className={allClassNames}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      title={title}
      {...restProps}
    >
      {children}
    </div>
  );
});
