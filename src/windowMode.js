

const Signals = imports.signals;

const WindowMode = {
    NONE: 0,
    OVERVIEW: 1,
    PREVIEW: 2
};

function ModeController() {
    this._init();
};

ModeController.prototype = {
    _init: function() {
        this._mode = WindowMode.NONE;
        this._fullscreen = false;
    },

    setWindowMode: function(mode) {
        if (this._mode == mode)
            return;

        if (mode == WindowMode.OVERVIEW)
            this.setCanFullscreen(false);

        this._mode = mode;
        this.emit('window-mode-changed', this._mode);
    },

    getWindowMode: function() {
        return this._mode;
    },

    setCanFullscreen: function(canFullscreen) {
        this._canFullscreen = canFullscreen;

        if (!this._canFullscreen && this._fullscreen)
            this.setFullscreen(false);
    },

    setFullscreen: function(fullscreen) {
        if (this._mode != WindowMode.PREVIEW)
            return;

        if (this._fullscreen == fullscreen)
            return;

        if (fullscreen && !this._canFullscreen)
            return;

        this._fullscreen = fullscreen;
        this.emit('fullscreen-changed', this._fullscreen);
    },

    toggleFullscreen: function() {
        this.setFullscreen(!this._fullscreen);
    },

    getFullscreen: function() {
        return this._fullscreen;
    }
};
Signals.addSignalMethods(ModeController.prototype);

function FocusController() {
    this._init();
};

FocusController.prototype = {
    _init: function() {
    },

    requestSearch: function() {
        this.emit('focus-search');
    }
};
Signals.addSignalMethods(FocusController.prototype);
