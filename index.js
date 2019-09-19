const vuedoc = require('@vuedoc/parser')

const options = {
  // filename: 'fixtures/UiAutocomplete.vue'
  filename: 'fixtures/UiAutocompleteMinimal.vue'
}

vuedoc.parse(options)
  .then((component) => console.log(component))
  .catch((err) => {
    console.error('got an error')
    console.error(err)
  })
