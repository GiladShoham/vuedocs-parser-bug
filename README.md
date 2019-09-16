This is a project to reproduce a bug in the @vuedoc/parser

## run project
```
npm i
node index.js
```

you will see an error:
`TypeError: Cannot read property 'type' of null`

There is 3 version of the component:
1. UiAutocomplete - The original full component
2. UiAutocompleteMinimal - A minimal version which is still not working
3. UiAutocompleteMinimalWorking - A working minimal version (it's the same as the not working version except remove line 14 - `let value;`)
