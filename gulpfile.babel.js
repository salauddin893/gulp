const {src, dest} = require('gulp');
const webpack = require('webpack-stream');

const js = () => {
    return src('./js/script.js')
        .pipe(webpack({
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                  }
                ]
              },
              mode: 'development'
        }))
        .pipe(dest('dist/js'));
}

exports.default = js;