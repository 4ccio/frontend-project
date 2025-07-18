import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export function buildCssLoader(isDev: boolean) {
    return {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                localIdentName: isDev
                                    ? '[path][name]__[local]--[hash:base64:5]'
                                    : '[hash:base64]',
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                // loadPaths: [
                                //     // eslint-disable-next-line max-len
                                //     path.resolve(__dirname, '..', '..', '..', 'src', 'app', 'styles'),
                                // ],
                            },
                        },
                    },

                ],
            },
        ],
    };
}
