import { css } from "@emotion/react"

export const notionCustomStyles = css`
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
  }
  .notion-list {
    width: 100%;
  }
  /* 리스트 아이템 텍스트 줄바꿈 처리 */
  .notion-list li {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
  .notion-list li > div {
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  /* 모바일 테이블 가로 스크롤 */
  .notion-simple-table {
    width: 100%;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: none !important;
    border-collapse: collapse !important;
  }
  .notion-simple-table > tbody,
  .notion-simple-table > thead {
    display: table;
    width: 100%;
    min-width: max-content;
  }
  .notion-simple-table th,
  .notion-simple-table td {
    white-space: pre-wrap;
    word-break: break-word;
    padding: 8px;
    vertical-align: top;
    border: 1px solid #d1d5db !important;
  }
  .notion-quote {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .notion-callout {
    font-size: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
  /* 인라인 코드가 길어질 때 좌우 스크롤 처리 */
  .notion-inline-code {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    vertical-align: middle;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
  }
  /* 최상위 리스트는 들여쓰기 없음 */
  .notion-list > ol,
  .notion-list > ul,
  .notion-list-numbered > ol,
  .notion-list-numbered > ul {
    margin-left: 0 !important;
    padding-left: 1.3em !important;
  }
  /* 첫 번째 리스트 항목만 왼쪽 패딩 제거 */
  .notion-list > ol > li:first-child,
  .notion-list > ul > li:first-child,
  .notion-list-numbered > ol > li:first-child,
  .notion-list-numbered > ul > li:first-child {
    padding-left: 0 !important;
  }
  .notion-hr {
    margin: 2em 0 !important;
  }
  .notion-code,
  .notion-inline-code {
    font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace !important;
  }
  /* 나머지 텍스트에만 글로벌 폰트 적용 */
  .notion-toggle,
  .notion-toggle-button,
  .notion-toggle-button-arrow,
  .notion-toggle-button-arrow-opened,
  .notion-toggle-content,
  .notion-simple-table,
  .notion-table-of-contents,
  .notion-text,
  .notion-list,
  .notion-h1,
  .notion-h2,
  .notion-h3,
  .notion-quote,
  .notion-callout,
  .category,
  .category * {
    font-family: "Noto Serif KR", "PingFang SC", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif !important;
  }
  .notion-table-of-contents,
  .notion-table-of-contents * {
    font-size: 0.925em !important;
    font-family: "Noto Serif KR", "PingFang SC", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
  }

`;