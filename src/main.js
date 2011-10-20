const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

const Gettext = imports.gettext;
const STYLE_DIR_PATH = 


function start() {
    
    let provider = new Gtk.CssProvider();
    Gtk.StyleContext.add_provider_for_screen(Gdk.Screen.get_default(),
                                             provider,
                                             600);
    
    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}