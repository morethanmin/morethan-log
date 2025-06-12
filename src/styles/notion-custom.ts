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
  /* 모바일 테이블 가로 스크롤 */
  .notion-simple-table {
    width: 100%;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
`;
