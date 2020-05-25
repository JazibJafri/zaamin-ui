module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                root: ['./src'],
            },
        ],
        'react-native-classname-to-style',
        [
            'react-native-platform-specific-extensions',
            {
                extensions: ['scss', 'sass', 'css', 'pcss'],
            },
        ],
    ],
};
