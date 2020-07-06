const example_MW = (store) => (next) => (action) => {
  if (action.type === 'EXAMPLE_STR') {
    // console.log('example_MW')
  }
  return next(action)
}

export default [example_MW]
