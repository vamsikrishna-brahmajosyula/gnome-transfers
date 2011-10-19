AM_CPPFLAGS = \
    -I$(top_builddir)/config \
    -I$(top_srcdir)	\
    -L$(top_srcdir)/src \
    -DGNOME_TRANSFERS_LIBDIR=\"$(libdir)\" \
    -DGNOME_TRANSFERS_DATADIR=\"$(datadir)\" \
    -DGNOME_TRANSFERS_PKGDATADIR=\"$(pkgdatadir)\" \
    -DGNOME_TRANSFERS_TOP_SRCDIR=\"$(abs_top_srcdir)\" \
    -DGNOME_TRANSFERS_BUILDDIR=\"$(abs_top_builddir)\"


typelibdir = $(libdir)/girepository-1.0

BUILT_SOURCES =
EXTRA_DIST =
CLEANFILES =
lib_LTLIBRARIES =
INTROSPECTION_GIRS =
gir_DATA =
typelib_DATA =
libexec_PROGRAMS =

# convenience command for doing Makefile variable substitutions in non-Makefile
# files (scripts, service files, etc.)
do_subst = sed -e 's|@abs_top_srcdir[@]|$(abs_top_srcdir)|g' \
               -e 's|@abs_top_builddir[@]|$(abs_top_builddir)|g' \
               -e 's|@localedir[@]|$(localedir)|g' \
               -e 's|@bindir[@]|$(bindir)|g' \
               -e 's|@libdir[@]|$(libdir)|g' \
               -e 's|@libexecdir[@]|$(libexecdir)|g' \
               -e 's|@pkglibdir[@]|$(pkglibdir)|g' \
               -e 's|@pkgdatadir[@]|$(pkgdatadir)|g'

include Makefile-js.am


bin_SCRIPTS = gnome-transfers

gnome-transfers: gnome-transfers.in
	$(AM_V_GEN) $(do_subst) $< > $@
	chmod +x $@

CLEANFILES += gnome-transfers
EXTRA_DIST += gnome-transfers.in