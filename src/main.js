const Gtk = imports.gi.Gtk;


const Gettext = imports.gettext;

function start(args) {
    Gtk.init(args)
    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}