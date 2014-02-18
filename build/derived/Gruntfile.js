module.exports = function(grunt)
{
    // Configuration.
    grunt.initConfig({

        // Import package information.
        package: grunt.file.readJSON('package.json'),

        // Merge includes to 'build/temp'.
        includes:
        {
            options:
            {
                includeRegexp: /(\s*)include\s*[(]\s*['"](\S+)['"]\s*[)]\s*;?\s*$/,
            },

            files:
            {
                //cwd: 'Classes',
                src: ['**/*.js'],
                dest: 'build/derived',
            },
        },

        // Minifiy 'build/derived' results.
        uglify:
        {
            app :
            {
                options:
                { banner: '/* <%= package.name %> <%= package.version %> */\n' },

                files :
                {
                    'build/<%= package.name %>.min.js' :
                    [ 'build/derived/Classes/<%= package.name %>!app.js' ],

                    'build/<%= package.version %>/<%= package.name %>!app_<%= package.version %>.min.js' :
                    [ 'build/derived/Classes/<%= package.name %>!app.js' ],
                },
            },

        },

        // Build SCSS.
        sass:
        {
            options:
            { compass: true },

            dist:
            {
                files:
                [
                    {
                        expand: true,
                        cwd: 'UI/scss',
                        src: ['*.scss'],
                        dest: 'build/UI',
                        ext: '.css'
                    },
                ],
            },
        },

        // Tests.
        mocha:
        {
            options:
            {
                run: true,
                reporter: 'Spec',
            },

            test:
            { src: [ 'Tests/**/*.html'] }
        },

        // Watch.
        watch:
        {
            files: ['Classes/**'],
            tasks: ['includes', 'uglify', 'sass', 'mocha']
        }

    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['watch']);

};