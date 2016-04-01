import flatten from 'flat'
import map from 'lodash/map'

/**
 * Returns a flat array of error objects suitable for
 * `react-forms` externalErrroList parameter, from a deep
 * nested object that matches CakePHP 3 validation errors.
 * 
 * @param   {Object}  errors
 * @returns {Array}
 */
export default function validationErrors(errors) {
  return map(flatten(errors), (val, key) => ({
    field: 'data.' + key.replace(/[.^][^.]+$/, ''),
    message: val
  }))
}