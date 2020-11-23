import { EnhancedCanvasRenderingContext2D } from "../utils/enhance-ctx";
import Ani from "./ani";
import { Component } from "../components";
import { Timer } from "d3-timer";
import { ColorManager } from "./color";
import { FontOptions } from "../options/font-options";
declare class Scene implements Ani {
    fps: number;
    sec: number;
    width: number;
    height: number;
    output: boolean;
    cFrame: number;
    components: Component[];
    totalFrames: number;
    canvas: HTMLCanvasElement;
    ctx: EnhancedCanvasRenderingContext2D;
    data: any;
    meta: any;
    hint: string;
    player: Timer;
    color: ColorManager;
    font: FontOptions;
    constructor(options?: object);
    addComponent(c: Component): void;
    loadData(path: string | any): Promise<void>;
    private readCsv;
    loadMeta(path: string | any): Promise<void>;
    ready(): void;
    play(): void;
    draw(frame: number): void;
    setOptions(options: object): void;
    calOptions(): void;
    setCanvas(selector?: string): void;
    private initCanvas;
    preRender(): void;
    private drawBackground;
    private drawHint;
}
export { Scene };
