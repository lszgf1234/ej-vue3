const toString = Object.prototype.toString

/**
 * 判断数据类型
 * @params
 *  val unknown
 *  type string
 * @return
 *  boolean
 * eg:
 *  is(111, 'Number') // true
 *  is('111', 'String') // true
 *  */

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}
