//Definitions for am_openlayers module

declare class XmlConfig {
    app: AppConfig;
}

declare class AppConfig {
    api: string;
    gis: string;
    urlmapserver: string;
    urlapplicatieconfigwebapi: string;
    urlgeorest: string;
    urldijkstraservice: string;
    urlAssetsApi: string;
    urlmapguideservice: string;
    urlGISHome: string;
}

interface IGlobalService {
    setApplicationName(name: string): void;
    getApplicationName(): string;
    getSidePanelVisible(): any;
    setSidePanelVisible(panelName: string, value: boolean): void
    getTableVisible(): any;
    setTableVisible(value: boolean): void;
    getInteractionMode(): any;
    setInteractionMode(newmode: string): void;
    getLayerData(): any;
    setLayerData(newData: any): void;
    getValidationData(): any;
    getZoomDone(): boolean;
    setZoomTimer(value: number): void;
    getZoomTimer(): number;
    getZoomButtonClicked(): any;
    setZoomButtonClicked(value: boolean): void;
    getIsBeheerder(): any;
    setIsBeheerder(value: boolean): void;
    setUserRole(value: string): void;
    getUserRole(): string;
    getAfterSelectFunction(): any;
    setAfterSelectFunction(value: (data: any, event?: any) => void): void;
    reloadMap(): void;
    refreshImageLayers(): void;
}

interface IInteractionService {
    enableDefaultMode(map): void;
    resetDefaultMode(): void;
    enableZoomMode(inOrOut: boolean): void;
    zoomToDefault(): void;
    enableMeasureLineMode(): void;
    enableMeasureAreaMode(): void;
    switchOverviewMap(): void;
    startSelect(afterSelect?: (data: any, event?: any) => void, selectType?: string, limitedLayers?: string): void;
    startAnnotate(type: string): void;
    clearAnnotations(): void;
    getEnabledInteractions(): any;
    StartPlacement(type: ol.geom.GeometryType, afterPlace: (feature: ol.Feature) => void): void;
}

interface ILogOnService {
    logOnUser(): void;
}

interface IDatapanelService {
    getCurrentPanel(): any;
    getIsLoading(): any;
    openPanel: (data: any, event: any) => void;
    closePanel(): void;
    loadPanel(data: any, previous?: any, feature?: ol.Feature): void;
    savePanel(saveLocation: string, saveData: any, isNew: boolean): void;
    getAssetsApiUrl(): string;
    addHighlight(feat: ol.Feature): void;
    deleteObject(deleteLocation: string): void;
}

interface IObjectAdminService {
    addObject(objectName: string, objectType: ol.geom.GeometryType): void;
    moveObject(objectName: string, objectType: ol.geom.GeometryType): void;
    confirmDeleteObject(objectName: string): void;
}

interface ITooltipService {
    initialize(): void;
}

interface IHighlightService {
    InitializeSelectionLayers(): void;
    InitializeSearchLayers(): void;
    InitializeRoadSearchLayers(): void;
    AddSelection(feature: ol.Feature): void;
    AddSearch(feature: ol.Feature): void;
    AddRoadSearchResult(features: Array<ol.Feature>): void;
    AddRoadSearchSelection(feature: ol.Feature): void;
    AddRoadSearchMarker(feature: ol.Feature): void;
    ClearSelection(): void;
    ClearSearch(): void;
    ClearRoadSearch(): void
    ClearRoadSearchResult(): void;
    ClearRoadSearchSelection(): void;
    ClearRoadSearchMarker(): void;
    RemoveRoadSearchSelection(feature: ol.Feature): void;
    RemoveRoadSearchMarker(feature: ol.Feature): void;
    ShowSelection(): void;
    ShowSearch(): void;
    ShowRoadSearch(): void;
    ShowRoadSearchResult(): void;
    ShowRoadSearchSelection(): void;
    ShowRoadSearchMarker(): void;
    HideSelection(): void;
    HideSearch(): void;
    HideRoadSearch(): void;
    HideRoadSearchResult(): void;
    HideRoadSearchSelection(): void;
    HideRoadSearchMarker(): void;
}

interface ILoaderService {
    getProcesses(): any;
    addProcess(name: string, text: string): void;
    removeProcess(name: string): void;
}

interface ILayerStyleService {
    getInteractionStyle(): any;
    getAnnotationStyle(): any;
    getAnnotationTextStyle(): any;
    getDrawingStyle(): any;
    getMeasureStyle(): any;
    getHighlightSelectionStyle(): any;
    getHighlightTableStyle(): any;
    getHighlightSelectionActivationStyle(): any;
    getMarkerSelectStartStyle(): any;
    getMarkerSelectEndStyle(): any;
    getMarkerNearestPointStartStyle(): any;
    getMarkerNearestPointEndStyle(): any;
}

interface IReportService {
    getItemSets(): Array<any>;
    startReport(layers: string): void;
    printReport(): void;
}

interface IPrintService {
    printMap(): void;
    printPane(paneId: string): void;
}
interface IPopupService {
    openPopup(dataLocation: string, template: string, controllerName: string): void;
}
interface ITranslationService {
    getAllTranslations(): Array<any>;
    getTranslation(id: string, language: string): string;
    addTranslations(application: string, translations: Array<any>): void;
}
interface ICoordinateConversionService {
    fromLambertToSID(coordinates: [number, number]): [number, number];
    fromSIDToLambert(coordinates: [number, number]): [number, number];
}