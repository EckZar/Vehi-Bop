//=========================================================================================
//========= Функция устанавливает окно запуска скрипта при установке дополнения============
//=========================================================================================

function onInstall(e: Object) {
  onOpen(e);  
}

function onOpen(e: Object){
  SpreadsheetApp.getUi()
      .createMenu('Vehi')
      .addItem('Window', 'createHtmlWindow')
      .addToUi();
}
