import {Map} from 'immutable'


export function arrToMap(arr, RecordModel) {
  return arr.reduce((acc,item) => acc.set(item.url, new RecordModel(item)) , new Map ({}))
}


export function mapToArr(map) {
  return map.valueSeq().toArray()
}


export function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}
