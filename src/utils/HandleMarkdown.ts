import { marked } from "marked";

export class HandleMarkdown {

  constructor(private _marked = marked){
    this._marked.setOptions({ breaks: true })
  }

  render = (content: string) =>{
    return this._marked(content, { mangle: false, headerIds: false })
  }
}