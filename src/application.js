const DBus = imports.dbus;
const Lang = imports.lang;
const Gettext = imports.gettext;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;

const Gtk = imports.gi.Gtk;
const GLib = imports.gi.GLib;

const MainWindow = imports.mainWindow;
const Global = imports.global;
const WindowMode = imports.windowMode;
const GtkClutter = imports.gi.GtkClutter;

function Application() {
    this._init();
}

Application.prototype = {
    _init: function() {
	GtkClutter.init(null,null);
	Global.application = this;
	Global.modeController = new WindowMode.ModeController();	
	this._mainWindow = new MainWindow.MainWindow();
	this.activate();	
    },

    activate: function() {
        this._mainWindow.window.present();
    },

    quit: function() {
        Gtk.main_quit();
    }
};
