/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private 
 */
// Remove single line comments
// It passes base test 
//    _makeFlat([1,2,[[3,4], 5, 6, [7,[8, [9, 10, 11], 12]]]])
//      => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
export default const _makeFlat = (recursive) => {
  const isFinal = (item) => {
    return Array.isArray(item) ? item.reduce((res, it) => !Array.isArray(it), false) : true 
  };
  
  recursive = Array.isArray(recursive) 
    ? recursive
      .reduce((result, arrItem) => Array.isArray(arrItem) ? result.concat(_makeFlat(arrItem)) : result.concat(arrItem), [])
    : recursive;
    return isFinal(recursive) ? recursive : _makeFlat(recursive);
};
