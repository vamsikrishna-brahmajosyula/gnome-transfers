const Gtk = imports.gi.Gtk;


const Gettext = imports.gettext;

function start() {
    Gtk.init (0, null);

    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}