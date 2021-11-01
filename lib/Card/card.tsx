import React, { FC, HTMLAttributes, ReactElement } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./card.scss";

const mergeClass = addPrefixAndMergeClass("yui-card");

interface CardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  extra?: ReactElement;
  children: any;
}

const Card: FC<CardProps> = props => {
  const { title, extra, children, className } = props;

  return (
    <div className={mergeClass("", { extra: className })}>
      <header className={mergeClass("header")}>
        <div className={mergeClass("header_title")}>{title}</div>
        {extra && <div className={mergeClass("header_extra")}>{extra}</div>}
      </header>
      <main className={mergeClass("content")}>{children}</main>
    </div>
  );
};

export default Card;
