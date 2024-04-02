import { lazy } from "react";

const DelayDefer = lazy(() => import(/* webpackChunkName: "templates/DelayDefer.jsx" */ `./DelayDefer`));
const ArticleDefer = lazy(() => import(/* webpackChunkName: "templates/ArticleDefer.jsx" */ `./ArticleDefer`));
const MegaOneJsDefer = lazy(() => import(/* webpackChunkName: "templates/MegaOneJsDefer.jsx" */ `./MegaOneJsDefer`));
const MegaOneClsDefer = lazy(() => import(/* webpackChunkName: "templates/MegaOneClsDefer.jsx" */ `./MegaOneClsDefer`));

export default {
  DelayDefer,
  ArticleDefer,
  MegaOneJsDefer,
  MegaOneClsDefer,
};