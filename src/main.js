const Gtk = imports.gi.Gtk;

const GtkClutter = imports.gi.GtkClutter;

const Gettext = imports.gettext;
 


function start() {
    
    GtkClutter.init(null,null)
    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}