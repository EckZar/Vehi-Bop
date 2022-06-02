function start(responsibleFaces: Array<string>, vehasNames: Array<string>, additionalFields: Array<string>, ownerId: number = -1){ 

    Logger.log("_____________________________________________________________________");
    Logger.log("Responsible Faces: " + responsibleFaces);
    Logger.log("_____________________________________________________________________");
    Logger.log("Vehas Names: " + vehasNames);
    Logger.log("_____________________________________________________________________");
    Logger.log("Additional fields: " + additionalFields);
    Logger.log("_____________________________________________________________________");

    responsibleFaces = ['Калинова Татьяна Сейрановна', 'Матвеев Евгений Александрович'];
    vehasNames = ['Detailed design', 'АР в уровне подвала: передано в ФР', 'Аванс за поставку мелкоштучных изделий', 'Аванс на поставку электрощитового оборудования'];
    additionalFields = [' Жилье', ' Нежилое помещение', ' Подрядчик по теплосетям'];

    return;


    let accessToken = oauthService().getAccessToken();

    ownerId = getIdByNames(responsibleFaces);

    let api = new APIMethod(urlRequest, responsibleFaces, vehasNames, ownerId, additionalFields);
}