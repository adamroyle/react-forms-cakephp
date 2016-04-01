# react-forms-cakephp

Helper functions for integrating CakePHP 3 and `react-forms`.

    npm install --save react-forms-cakephp


## validationErrors

Returns a flat array of error objects suitable for
`react-forms` externalErrorList parameter, from a deep
nested object that matches CakePHP 3 validation errors.

```js
import { validationErrors } from 'react-forms-cakephp'

const obj = {
  title: {
    _empty: 'Page needs a title'
  },
  images: [
    {
      _empty: 'Image needs a title'
    }
  ]
}

console.log(validationErrors(obj))
```

```js
[
  {
    field: "data.title",
    message: "Page needs a title"
  },
  {
    field: "data.images.0.title",
    message: "Image needs a title"
  }
]
```
