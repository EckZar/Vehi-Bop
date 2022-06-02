// Преобразуем массив additionalFields с ключами, в объект ключ: значение. 
// Пример — ["process",	"projectName",	"cityName"] => { "process": "Процесс", "projectName": "ЖК",	"cityName": "Город"}
function matchKeys(array: Array<string>){ 
  return configList?.getRange(2, 1, configList.getLastRow(), 2).getValues()
          .filter(item => array.indexOf(item[0])>=0 && item[0])
          .reduce((newObj: {[index: string]:string}, item: Array<string>) => {
            newObj[item[0]] = item[1];
            return newObj;
          }, {});
}

function getIdByNames(names: Array<string>): any{
  let configs = getConfigs(2, 1, 2);
  if(configs)  {
    return configs.filter(item => item[0] === name)[1];
  } else {
    return [];
  }
}

function getConfigs(startRow: number, startColumn: number, numColumns: number = 0): Array<Array<string|number>>{
  
  if(configList != null)  {
    return configList.getRange(startRow, startColumn, configList.getLastRow()-(startRow-1), numColumns).getValues();
  } else {
    return [];
  }

}


































