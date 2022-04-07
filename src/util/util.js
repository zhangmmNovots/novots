
const baseURL = 'http://iqxceqhnhubt.weilaios.com'

/* 根据某一个字段寻找数据
 * @param {Array} list 数据
 * @param {String} field 数据中的字段
 * @param {String} value 数据值
 * @param {String} children 子数据的字段
 */
const findDataByField = (list = [], field = '', value, children = 'children') => {
  let obj = null

  for (let i = 0; i < list.length; i++) {
    if (list[i][field] === value) {
      obj = list[i]
      break
    } else if (list[i][children] && list[i][children].length) {
      obj = findDataByField(list[i][children], field, value, children)
      if (obj) break
    }
  }
  return obj
}
export {
  baseURL,
  findDataByField
}