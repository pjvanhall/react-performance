import filtercities from 'workerize!./filter-cities'

const instance = filtercities()
const getItems = instance.getItems;

export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
