const Gtk = imports.gi.Gtk;
 

const Gtk = imports.gi.Gtk;
const Application = imports.application;

const Gettext = imports.gettext;

function start() {
    let application = new Application.Application();
    Gtk.main();
}

