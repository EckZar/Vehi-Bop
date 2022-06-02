function createHtmlWindow() {
    let arrayNamesOptions: string = "";

    configList?.getRange(2, 4, configList.getLastRow()-1, 1).getValues()
    .filter(cell => cell[0])
    .sort()
    .map(item => arrayNamesOptions += "<option>" + item + "</option>" + String.fromCharCode(10) );

    let arrayVehaNames: string = "";

    configList?.getRange(2, 7, configList.getLastRow()-1, 1).getValues()
    .filter(cell => cell[0])
    .sort()
    .map(item => arrayVehaNames += "<option>" + item + "</option>" + String.fromCharCode(10) );

    let arrayOptionNames: string = "";

    configList?.getRange(2, 2, configList.getLastRow()-1, 1).getValues()
    .filter(cell => cell[0])
    .sort()
    .map(item => arrayOptionNames += `<option> ${item[0]}</option>` + String.fromCharCode(10));

    let html = HtmlService.createHtmlOutputFromFile('index')
               .setTitle("Формировка списка");

    let content = html.getContent();

    content = content.replace(/{arrayNamesOptions}/, arrayNamesOptions)
                     .replace(/{arrayVehaNames}/, arrayVehaNames)
                     .replace(/{additionalFields}/, arrayOptionNames)
                     .replace(/{Stylesheet}/, include('Stylesheet'))
                     .replace(/{JavaScript}/, include('JavaScript'));
                    

    html.setContent(content);

    SpreadsheetApp.getUi().showSidebar(html);
}

function include(filename: string){
    return HtmlService.createHtmlOutputFromFile(filename)
           .getContent();
}