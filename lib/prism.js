import Prism from "prismjs"

Prism.languages.fluor = Prism.languages.extend("javascript", {
  keyword: [
    {
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true,
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield|addClass|removeClass|toggleClass|append|prepend|pop|shift|withEvent)\b/,
      lookbehind: true,
    },
  ],
})

Prism.languages.markup.tag.addInlined("script", "fluor")

Prism.languages["fluor-function"] = {
  function: /.*/,
}

Prism.languages["fluor-string"] = {
  string: /.*/,
}

Prism.languages["fluor-boolean"] = {
  boolean: /.*/,
}

Prism.languages["fluor-object"] = {
  tag: /.*/,
}

Prism.languages["fluor-action"] = {
  keyword: /.*/,
}

Prism.languages["fluor-mixed"] = {
  entity: /.*/,
}

Prism.languages["fluor-number"] = {
  number: /.*/,
}

export default Prism
