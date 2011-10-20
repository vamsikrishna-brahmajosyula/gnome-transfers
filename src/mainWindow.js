const Gdk = imports.gi.Gdk;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;

const Lang = imports.lang;
const Mainloop = imports.mainloop;


const Embed = imports.embed;
const Global = imports.global;
const Sidebar = imports.sidebar;
const WindowMode = imports.windowMode;

const _ = imports.gettext.gettext;

const _WINDOW_DEFAULT_WIDTH = 768;
const _WINDOW_DEFAULT_HEIGHT = 600;

function MainWindow() {
    this._init();
}

MainWindow.prototype = {
    _init: function() {
        this.window = new Gtk.Window({ type: Gtk.WindowType.TOPLEVEL,
                                       window_position: Gtk.WindowPosition.CENTER,
                                       title: _("Transfers") });

        Global.modeController.setWindowMode(WindowMode.WindowMode.OVERVIEW);

        this.window.set_size_request(_WINDOW_DEFAULT_WIDTH, _WINDOW_DEFAULT_HEIGHT);
        this.window.maximize();
        this.window.connect('delete-event',
                            Lang.bind(this, this._onDeleteEvent));
        
        this._grid = new Gtk.Grid({ orientation: Gtk.Orientation.HORIZONTAL });
        this.window.add(this._grid);

        this._sidebar = new Sidebar.Sidebar();
        this._grid.add(this._sidebar.widget);

        this._embed = new Embed.ViewEmbed();
        this._grid.add(this._embed.widget);

        this._grid.show_all();
    },


    _onDeleteEvent: function() {
        Global.application.quit();
    }
};
