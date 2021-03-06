/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * License https://xdsoft.net/jodit/license.html
 * Copyright 2013-2018 Valeriy Chupurnov https://xdsoft.net
 */
import { Component } from "../Component";
import { ToolbarCollection } from "./collection";
import { ControlTypeStrong } from "./type";
import { IViewBased } from "../view/type";
export declare abstract class ToolbarElement extends Component {
    container: HTMLElement;
    parentToolbar: ToolbarCollection | null;
    createIcon(clearName: string, control?: ControlTypeStrong): HTMLElement;
    protected constructor(jodit: IViewBased, containerTag?: string, containerClass?: string);
}
