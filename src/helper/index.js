import {Map} from 'immutable'


export function arrToMap(arr, RecordModel) {
  return arr.reduce((acc,item) => acc.set(item.url, new RecordModel(item)) , new Map ({}))
}

export function arrToMapId(arr, RecordModel) {
  return arr.reduce((acc,item) => acc.set(item.id, new RecordModel(item)) , new Map ({}))
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


export function getFormatedDateId() {
  const date = new Date();
  return String(date.getFullYear() + '' + date.getMonth() + '' + date.getDate() + '' + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds())
}
