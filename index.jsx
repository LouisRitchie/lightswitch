module.exports = {
    plugins: [
        require('babel-plugin-syntax-class-properties'),
        require('babel-plugin-syntax-class-properties'),
        require('babel-plugin-syntax-object-rest-spread'),

        // passing parameters using arry syntax
        [
            require('babel-plugin-transform-regenerator'),
            {
                async: false,
                asyncGenerators: false
            }
        ]
    ]
};
