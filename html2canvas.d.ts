//Type definition for html2canvas v0.4.1
//Definition on dt is for v0.5.x-beta

declare namespace Html2Canvas {
    interface Html2CanvasOptions {
        onrendered: (canvas: any) => void;
    }
}

interface Html2CanvasStatic {
    (element: HTMLElement, options?: Html2Canvas.Html2CanvasOptions): void;
}

declare module 'html2canvas' {
    export = html2canvas;
}

declare var html2canvas: Html2CanvasStatic;