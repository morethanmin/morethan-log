import React from "react";
import { ExtendedRecordMap } from "notion-types";

type Props = {
  recordMap: ExtendedRecordMap;
};

const TableOfContents: React.FC<Props> = ({ recordMap }) => {
  if (!recordMap) return null;

  const tocEntries = Object.values(recordMap.block)
    .map((block) => {
      const value = block.value;
      if (value?.type === "header" || value?.type === "sub_header" || value?.type === "sub_sub_header") {
        return {
          id: value.id,
          text: value.properties?.title?.[0]?.[0] || "Untitled",
          type: value.type,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <nav className="notion-table-of-contents">
      {tocEntries.map((entry) => (
        <a key={entry?.id} href={`#${entry?.id}`}>
          <span>{entry?.text}</span>
        </a>
      ))}
    </nav>
  );
};

export default TableOfContents;
