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

interface IConfigLoaderService {
        getConfigData(application?: string): any;
    }

interface IRoadSearchService {
        getDisplayData(): any;
        getStartPoint(): any;
        getEndPoint(): any;
        getParameters(): any;
        afterStartPointSelect(data: any, event: any): void;
        afterEndPointSelect(data: any, event: any): void;
        startSearchNoExtent(projection?: string): void;
        startSearch(projection?: string): void;
        getPosten(isStart: boolean): Array<any>;
        getPoorten(isStart: boolean): Array<any>;
        getGebouwen(isStart: boolean): Array<any>;
        getGebouwByNummer(nummer: string, postvak?: string): ng.IPromise<any>;
        getPersonen(isStart: boolean): Array<any>;
        setPoint(x: number, y: number, startOrEnd: boolean, geometry?: string, projection?: string): void;
        clearMarker(startOrEnd: boolean): void;
        clearSearch(): void;
        clearRoads(): void;
        resetDisplayData(): void;
        clearStartPoort(): void;
        clearEndPoort(): void;
        clearStartPost(): void;
        clearEndPost(): void;
        clearStartGebouw(): void;
        clearEndGebouw(): void;
        clearStartPersoon(): void;
        clearEndPersoon(): void;
}

interface INewRoadSearchService {
        getDisplayData(): any;
        getStartPoint(): any;
        getEndPoint(): any;
        getParameters(): any;
        afterStartPointSelect(data: any, event: any): void;
        afterEndPointSelect(data: any, event: any): void;
        startSearchNoExtent(projection?: string): void;
        startSearch(projection?: string): void;
        getPosten(isStart: boolean): Array<any>;
        getPoorten(isStart: boolean): Array<any>;
        getGebouwen(isStart: boolean): Array<any>;
        getGebouwByNummer(nummer: string, postvak?: string): ng.IPromise<any>;
        getPersonen(isStart: boolean): Array<any>;
        setPoint(x: number, y: number, startOrEnd: boolean, geometry?: string, projection?: string): void;
        clearMarker(startOrEnd: boolean): void;
        clearSearch(): void;
        clearRoads(): void;
        resetDisplayData(): void;
        clearStartPoort(): void;
        clearEndPoort(): void;
        clearStartPost(): void;
        clearEndPost(): void;
        clearStartGebouw(): void;
        clearEndGebouw(): void;
        clearStartPersoon(): void;
        clearEndPersoon(): void;
}

interface IDataTableService {
    getTabs(): Array<any>;
    getTab(tabName: string): any;
    addTab(name: string, actionsEnabled?: boolean): void;
    getHeaders(tab: string): Array<any>;
    addHeader(name: string, tab: string): void;
    getLines(tab: string): Array<any>;
    addLine(line: any, tab: string): void;
    deleteLine(tabName: string, lineId: number): void;
    selectLine(tabName: string, lineId: number): void;
    closeTab(tabName: string);
    deleteSelectedRows(): void;
    zoomToRow(tabName: string, lineId: number): void;
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
    setUserRoles(value: string[]): void;
    setUserName(value: string): void;
    getUserRoles(): string[];
    getUserName(): string;
    getAfterSelectFunction(): any;
    setAfterSelectFunction(value: (data: any, event?: any) => void): void;
    getAfterApplicationLoadfunction(): any;
    setAfterApplicationLoadfunction(value: (data: any, event?: any) => void): void;
    switchSidePanelsOff(): void;
    reloadMap(): void;
    refreshImageLayers(): void;
    refreshImageLayer(layer: string): void;
    getReportableLayers(): string;
    getMoveableLayers(): string;
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
    StartPlacementEvent(type: any, afterPlace: (feature: ol.Feature) => void, beforePlace: (feature: ol.Feature) => void): void;
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
    zoomTo(field: any, zoomData?: any): void;
    reloadPrevious(): void;
    setMessage(message: string): void;
}

interface IObjectAdminService {
    addObject(objectName: string, objectType: ol.geom.GeometryType): void;
    addCoordsForExistingObject(objectName: string, objectId: string, objectType: ol.geom.GeometryType): void;
    moveObject(objectName: string, objectType: ol.geom.GeometryType): void;
    confirmDeleteObject(objectName: string): void;
}

interface ITooltipService {
    initialize(): void;
}

interface ISearchService {
    getSearchText(): any;
    getSearchValues(): any;
    getLayers(): Array<any>;
    getLayerProperties(): void;
    getSearchValueData(): any;
    updateValues(): void;
    getValues(): ng.IHttpPromise<Array<any>>;
    search(): void;
    searchOnlyHighlight(): void;
    cancelSearch(): void;
    getMessages(): any;
    clearMessages(): void;
    resetAttributes(): void;
    setSearchValue(value: any): void;
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
    startReports(layers: string): void;
    openReport(layer: string, ids: Array<string>): void;
    printReport(): void;
}

interface IPrintService {
    printMap(): void;
    printPane(element: HTMLElement): void;
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
    fromETRS89ToSID(coordinates: [number, number, number, number, number, number]): [number, number];
}
interface IMapFilterService {
    applyFilter(layer: string, filter: string): void;
}

interface ILayerFilterService {
    AddFilterData(layer: string): void;
    GetFilterData(): any;
    ApplyFilters(): void;
    AddFilterDataWithRemove(layer: string): void;
}

interface IDetailsScreenService {
    getVisible(): any;
    setVisible(value: boolean): void;
    getTemplate(): any;
    setTemplate(value: string): void;
}

interface IHelperService {
    isNullOrUndefined(value: any): boolean;
    handleMapGuideJSON(mapguideJson: Array<any>): Array<ol.Feature>;
}

interface IExportService {
    GetTableHeaders(type: string): any;
    ExportTable(type: string, headers: any, ids: any): any;
}

interface IGeometryService {
    getWKTFromFeature(feature): any;
    getFeatureFromWKT(WKT: string, projection?: string): any;
    getWKTFromGeometry(Geom: any): any;
}

interface IZoomService {
    zoomTo(mapId: string, scale: number): void;
    zoomToUserView(mapId, userview: any): void;
    zoomToExtent(mapId, extent, isDataPanel?): void;
}

interface ISelectService {
    startSelect(enabledInteractions: Array<any>, afterSelect?: (data: any, event?: any) => void, selectType?: string, limitedLayers?: string): void;
    startDragSelect(enabledInteractions: Array<any>, afterSelect: (data: any, event?: any) => void, limitedLayers: string): void;
    getLatestSelection(): any;
    setLatestSelectionPanel(panel: any): void;
    setLatestSelectionData(data: any): void;
    clearSelectionPanel(): void;
}
