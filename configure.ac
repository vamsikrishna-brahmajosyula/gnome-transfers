AC_PREREQ(2.63)
AC_INIT([gnome-transfers],[0.1.0],[],[gnome-transfers])

AM_CONFIG_HEADER(config/config.h)
AC_CONFIG_SRCDIR([src/main.js])
AC_CONFIG_MACRO_DIR([m4])
AC_CONFIG_AUX_DIR([config])

m4_ifdef([AM_SILENT_RULES],[AM_SILENT_RULES([yes])])

AC_CANONICAL_TARGET

# require automake 1.11
AM_INIT_AUTOMAKE([1.11 dist-xz no-dist-gzip tar-ustar foreign])
AM_MAINTAINER_MODE([enable])


# enable libtool
AC_PROG_LIBTOOL
# avoid libtool for LTCOMPILE, use it only to link

## don't rerun to this point if we abort
AC_CACHE_SAVE

GJS_JS_DIR=`$PKG_CONFIG --variable=datadir gjs-1.0`/gjs-1.0
AC_SUBST(GJS_JS_DIR)

GLIB_GSETTINGS

GLIB_MIN_VERSION=2.29.90
GTK_MIN_VERSION=3.1.13
GDATA_MIN_VERSION=0.9.1
CLUTTER_GTK_MIN_VERSION=1.0.1


PKG_CHECK_MODULES(TRANSFERS,
                  clutter-gtk-1.0 >= $CLUTTER_GTK_MIN_VERSION
                  glib-2.0 >= $GLIB_MIN_VERSION
                  gtk+-3.0 >= $GTK_MIN_VERSION
                  gnome-desktop-3.0
                  libgdata >= $GDATA_MIN_VERSION
                  )


AC_CONFIG_FILES([
Makefile
src/Makefile
])

AC_OUTPUT

dnl ==========================================================================
echo "

        gnome-transfers $VERSION
        ==================

        prefix:    ${prefix}
        compiler:  ${CC}

        Now type 'make' to build $PACKAGE
"