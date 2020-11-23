import { Fontable } from "./../options/font-options";
import { TextLinesOptions } from "../options/text-lines-options";
import { Group } from "./group";
import { Text } from "./Text";
export declare class TextLines extends Group implements Fontable {
    components: Text[];
    lineSpacing: number;
    fillStyle: string | CanvasGradient | CanvasPattern;
    constructor(options: TextLinesOptions);
    reset(options: TextLinesOptions): void;
}
