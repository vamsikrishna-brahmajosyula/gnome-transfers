const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

const Gettext = imports.gettext;

function start() {
    
    let provider = new Gtk.CssProvider();
    provider.load_from_path(Path.STYLE_DIR + "gtk-style.css");
    Gtk.StyleContext.add_provider_for_screen(Gdk.Screen.get_default(),
                                             provider,
                                             600);
    
    var w = new Gtk.Window ({title: "Gnome Transfers"});
    w.show ();

    Gtk.main ();
}