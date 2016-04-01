import expect from 'expect'

import { validationErrors } from '../src/'

describe('validationErrors', () => {
  it('should process numerically indexed arrays', () => {
    const input = {
      hero_sections: [
        {
          title: {
            _empty: 'Hero section needs a title'
          }
        }
      ],
      title: {
        _empty: "Page needs a title"
      }
    }
    const expected = [
      {
          field: "data.hero_sections.0.title",
          message: "Hero section needs a title"
      },
      {
          field: "data.title",
          message: "Page needs a title"
      }
    ]
    expect(validationErrors(input)).toEqual(expected)
  })
  it('should process numerically indexed objects', () => {
    const input = {
      hero_sections: {
        0: {
          title: {
            _empty: 'Hero section needs a title'
          }
        },
        6: {
          title: {
            _empty: 'Hero section needs a title'
          }
        }
      },
      title: {
        _empty: "Page needs a title"
      }
    }
    const expected = [
      {
          field: "data.hero_sections.0.title",
          message: "Hero section needs a title"
      },
      {
          field: "data.hero_sections.6.title",
          message: "Hero section needs a title"
      },
      {
          field: "data.title",
          message: "Page needs a title"
      }
    ]
    expect(validationErrors(input)).toEqual(expected)
  })
  it('should accept fields starting with underscores', () => {
    const input = {
      _sections: {
        0: {
          title: {
            _empty: 'Hero section needs a title'
          }
        },
        6: {
          title: {
            _empty: 'Hero section needs a title'
          }
        }
      },
      title: {
        _empty: "Page needs a title"
      }
    }
    const expected = [
      {
          field: "data._sections.0.title",
          message: "Hero section needs a title"
      },
      {
          field: "data._sections.6.title",
          message: "Hero section needs a title"
      },
      {
          field: "data.title",
          message: "Page needs a title"
      }
    ]
    expect(validationErrors(input)).toEqual(expected)
  })
  it('should accept custom rule names', () => {
    const input = {
      _sections: {
        0: {
          title: {
            custom: 'Hero section needs a title'
          }
        },
        6: {
          title: {
            custom: 'Hero section needs a title'
          }
        }
      },
      title: {
        ruleName: "Page needs a title"
      }
    }
    const expected = [
      {
          field: "data._sections.0.title",
          message: "Hero section needs a title"
      },
      {
          field: "data._sections.6.title",
          message: "Hero section needs a title"
      },
      {
          field: "data.title",
          message: "Page needs a title"
      }
    ]
    expect(validationErrors(input)).toEqual(expected)
  })
})
