function getServiceProperty(prop: string) {
    return PropertiesService.getScriptProperties().getProperty(prop);
}