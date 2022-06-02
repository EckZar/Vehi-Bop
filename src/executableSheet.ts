function isSheet(sheetName: string){ // Проверка наличия листа sheetName, добавляем если нету.

    let activeMain = SpreadsheetApp.getActiveSpreadsheet();
    let mainSheet = activeMain.getSheetByName(sheetName);

    if(mainSheet === null)
    {
        SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
    }  

    mainSheet?.activate();

    let head = [["id", "GUID_Объект", "Серия объекта", "Дирекция",	"Проект",	"ЖК",	"Объект",	"м2",	"Название вехи",	"План",	"Прогноз/Факт",	"План_БОП",	"План_БОП2",	"Статус",	"Обновлено", "Дата удаления"]];

    mainSheet?.getRange(1,1).setValue("Ответственный:").setFontWeight('bold').setFontSize(12);
    mainSheet?.getRange(1,3).setValue("Cтатус:").setFontWeight('bold').setFontSize(12);
    mainSheet?.getRange(1,5).setValue("Веха").setFontWeight('bold').setFontSize(12);
    mainSheet?.getRange(1,18).setValue("Доп. поля:").setFontWeight('bold').setFontSize(12);
    mainSheet?.getRange(2,1,1, head[0].length).setValues(head).setFontWeight('bold').setFontSize(12);
  
}