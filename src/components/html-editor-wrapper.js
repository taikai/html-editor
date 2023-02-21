import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  &.html-viewer {
    margin: 0 auto;
    max-width: ${(props) => props.width ?? "100%"};
  }

  .fr-wrapper {
    border-radius: 0 0 6px 6px;
    overflow: inherit;
  }

  .fr-toolbar {
    border-radius: 6px 6px 0 0;

    + div > * {
      margin: 0 auto;
      max-width: ${(props) => props.width ?? "100%"};
    }
  }

  .fr-second-toolbar {
    display: none;
  }

  .fr-box.fr-basic .fr-element {
    padding: 24px;
    font-family: inherit;
    font-size: 1rem;
    color: inherit;
    line-height: inherit;
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .markdown-body details,
  .markdown-body figcaption,
  .markdown-body figure {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body [hidden] {
    display: none !important;
  }

  .markdown-body a {
    background-color: transparent;
    color: #4329a6;
    text-decoration: underline;
  }

  .markdown-body abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  .markdown-body b,
  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body dfn {
    font-style: italic;
  }

  .markdown-body h1 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 2em;
    /* border-bottom: 1px solid hsla(210, 18%, 87%, 1); */
  }

  .markdown-body mark {
    background-color: #fff8c5;
    color: #24292f;
  }

  .markdown-body small {
    font-size: 90%;
  }

  .markdown-body sub,
  .markdown-body sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .markdown-body sub {
    bottom: -0.25em;
  }

  .markdown-body sup {
    top: -0.5em;
  }

  .markdown-body img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: #ffffff;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre,
  .markdown-body samp {
    font-family: monospace;
    font-size: 1em;
  }

  .markdown-body figure {
    margin: 1em 40px;
  }

  .markdown-body hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #d0d7de;
    border: 0;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body hr::before {
    display: table;
    content: "";
  }

  .markdown-body hr::after {
    display: table;
    clear: both;
    content: "";
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body details:not([open]) > *:not(summary) {
    display: none !important;
  }

  .markdown-body a:focus {
    outline: 2px solid #0969da;
    outline-offset: -2px;
    box-shadow: none;
  }

  .markdown-body a:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  .markdown-body a:focus-visible {
    outline: 2px solid #0969da;
    outline-offset: -2px;
    box-shadow: none;
  }

  .markdown-body a:not([class]):focus,
  .markdown-body a:not([class]):focus-visible {
    outline-offset: 0;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    line-height: 10px;
    color: #24292f;
    vertical-align: middle;
    background-color: #f6f8fa;
    border: solid 1px rgba(175, 184, 193, 0.2);
    border-bottom-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .markdown-body h2 {
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }

  .markdown-body h3 {
    font-weight: 600;
    font-size: 1.25em;
  }

  .markdown-body h4 {
    font-weight: 600;
    font-size: 1em;
  }

  .markdown-body h5 {
    font-weight: 600;
    font-size: 0.875em;
  }

  .markdown-body h6 {
    font-weight: 600;
    font-size: 0.85em;
    color: #57606a;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
    padding: 0 1em;
    color: #57606a;
    border-left: 0.25em solid #d0d7de;
  }

  .markdown-body ul,
  .markdown-body ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ul ul ol,
  .markdown-body ul ol ol,
  .markdown-body ol ul ol,
  .markdown-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body tt,
  .markdown-body code,
  .markdown-body samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .markdown-body::before {
    display: table;
    content: "";
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: "";
  }

  .markdown-body .fr-view > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body .fr-view > *:last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body p,
  .markdown-body blockquote,
  .markdown-body ul,
  .markdown-body ol,
  .markdown-body dl,
  .markdown-body table,
  .markdown-body pre,
  .markdown-body details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body h1 tt,
  .markdown-body h1 code,
  .markdown-body h2 tt,
  .markdown-body h2 code,
  .markdown-body h3 tt,
  .markdown-body h3 code,
  .markdown-body h4 tt,
  .markdown-body h4 code,
  .markdown-body h5 tt,
  .markdown-body h5 code,
  .markdown-body h6 tt,
  .markdown-body h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  .markdown-body summary h1,
  .markdown-body summary h2,
  .markdown-body summary h3,
  .markdown-body summary h4,
  .markdown-body summary h5,
  .markdown-body summary h6 {
    display: inline-block;
  }

  .markdown-body summary h1,
  .markdown-body summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .markdown-body ol[type="a"] {
    list-style-type: lower-alpha;
  }

  .markdown-body ol[type="A"] {
    list-style-type: upper-alpha;
  }

  .markdown-body ol[type="i"] {
    list-style-type: lower-roman;
  }

  .markdown-body ol[type="I"] {
    list-style-type: upper-roman;
  }

  .markdown-body ol[type="1"] {
    list-style-type: decimal;
  }

  .markdown-body div > ol:not([type]) {
    list-style-type: decimal;
  }

  .markdown-body ul ul,
  .markdown-body ul ol,
  .markdown-body ol ol,
  .markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table th {
    font-weight: 600;
  }

  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
  }

  .markdown-body table tr {
    background-color: #ffffff;
    border-top: 1px solid hsla(210, 18%, 87%, 1);
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .markdown-body table img {
    background-color: transparent;
  }

  .markdown-body img[align="right"] {
    padding-left: 20px;
  }

  .markdown-body img[align="left"] {
    padding-right: 20px;
  }

  .markdown-body .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  .markdown-body code,
  .markdown-body tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
  }

  .markdown-body code br,
  .markdown-body tt br {
    display: none;
  }

  .markdown-body del code {
    text-decoration: inherit;
  }

  .markdown-body samp {
    font-size: 85%;
  }

  .markdown-body pre code {
    font-size: 100%;
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 6px;
  }

  .markdown-body pre code,
  .markdown-body pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .markdown-body g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1em;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
  }

  .markdown-body g-emoji img {
    width: 1em;
    height: 1em;
  }
`;

const HtmlEditorWrapper = ({ className, width, children }) => (
  <Wrapper className={className} width={width}>
    <div className="markdown-body">{children}</div>
  </Wrapper>
);

HtmlEditorWrapper.defaultProps = {
  className: "html-editor",
};

HtmlEditorWrapper.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HtmlEditorWrapper;
