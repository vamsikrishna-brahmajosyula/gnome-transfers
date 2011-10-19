const Gtk = imports.gi.Gtk;


const Gettext = imports.gettext;

function start() {

    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}