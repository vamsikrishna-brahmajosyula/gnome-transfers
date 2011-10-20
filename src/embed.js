
const Lang = imports.lang;
const Mainloop = imports.mainloop;

const Global = imports.global;
const MainToolbar = imports.mainToolbar;
const Clutter = imports.gi.Clutter;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;
const GtkClutter = imports.gi.GtkClutter;



function ViewEmbed() {
    this._init();
}

ViewEmbed.prototype  = {
    _init: function() {
   
        this.widget = new Gtk.Grid({ orientation: Gtk.Orientation.VERTICAL });

        this._toolbar = new MainToolbar.MainToolbar();
        this.widget.add(this._toolbar.widget);
    },

    
};