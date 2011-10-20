const Gtk = imports.gi.Gtk;
const _ = imports.gettext.gettext;

const Lang = imports.lang;
const Signals = imports.signals;

const Global = imports.global;

const _SIDEBAR_WIDTH_REQUEST = 240;

const _SIDEBAR_SOURCES_PAGE = 0;
const _SIDEBAR_MAIN_PAGE = 1;

const SidebarModelColumns = {
    ID: 0,
    NAME: 1,
    ICON: 2,
    HEADING: 3
};

function SidebarModel() {
    this._init();
};

SidebarModel.prototype = {
    _init: function() {
        let iter = null;
    }
};

function SidebarView() {
    this._init();
};

SidebarView.prototype = {
    _init: function() {
        
        this.widget = new Gtk.ScrolledWindow({ hscrollbar_policy: Gtk.PolicyType.NEVER });
        
        this.widget.show_all();
    }
};

function SidebarMainPage() {
    this._init();
};

SidebarMainPage.prototype = {
    _init: function() {
        this.widget = new Gtk.Grid({ orientation: Gtk.Orientation.VERTICAL,
                                     border_width: 6,
                                     width_request: _SIDEBAR_WIDTH_REQUEST,
                                     column_homogeneous: true,
                                     row_spacing: 12 });

        
        
        this._sidebarView = new SidebarView();
        this.widget.add(this._sidebarView.widget);

        this.widget.show_all();
    },

    _onSourcesButtonClicked: function() {
        this.emit('sources-button-clicked');
    }
};
Signals.addSignalMethods(SidebarMainPage.prototype);

function Sidebar() {
    this._init();
}

Sidebar.prototype = {
    _init: function() {
        this.widget = new Gtk.Notebook({ show_tabs: false });
        this.widget.get_style_context().add_class(Gtk.STYLE_CLASS_SIDEBAR);

        
        this._sidebarView = new SidebarMainPage();
        this.widget.insert_page(this._sidebarView.widget, null, _SIDEBAR_MAIN_PAGE);
       

        this.widget.set_current_page(_SIDEBAR_MAIN_PAGE);

    },

};
