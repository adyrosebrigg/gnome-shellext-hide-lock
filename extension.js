const Main = imports.ui.main;

class Extension {
    constructor() {
        this._systemMenu = null;
    }

    enable() {
        this._systemMenu = Main.panel.statusArea.aggregateMenu._system;

        this._systemMenu._lockScreenItem.visible = false;
    }

    disable() {
        this._systemMenu._lockScreenItem.visible = true;

        this._systemMenu = null;
    }
}

function init() {
    return new Extension();
}
