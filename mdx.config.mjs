import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default {
  remarkPlugins: [remarkGfm],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};


