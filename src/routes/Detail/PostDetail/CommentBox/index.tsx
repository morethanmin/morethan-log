import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"
import React, { useEffect, useRef } from "react";

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import("./Cusdis")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", "seoseuo/morethan-log");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "Comment");
    script.setAttribute("theme", "github-light");

    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef}></div>;
};


export default CommentBox
