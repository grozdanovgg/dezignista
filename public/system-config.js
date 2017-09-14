System.config({

    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',

    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // files
        'main': './js/app.js',

        // libraries
        'firebaseApp': '/libs/firebase/firebase-app.js',
        'firebaseDb': '/libs/firebase/firebase-database.js',
        'firebaseAuth': '/libs/firebase/firebase-auth.js',
        'jquery': '/libs/jquery/dist/jquery.min.js',
        'navigo': '/libs/navigo/lib/navigo.min.js',
        'tablesorter': '/libs/tablesorter/dist/js/jquery.tablesorter.min.js',
        'bloodhound': '/libs/typeahead.js-jspm/dist/bloodhound.min.js',
        'typeahead': '/libs/typeahead.js-jspm/dist/typeahead.jquery.min.js',
        'toastr': '/libs/toastr/build/toastr.min.js'
    },

    meta: {
        './js.app': {
            format: 'esm'
        }
    }
});

System.import('js/app.js');