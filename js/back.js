/**
 * seccion de carga de monaco
 * 
 */

import { parse } from './parser.js';

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.38.0/min/vs' }});
require(['vs/editor/editor.main'], function () {
    let editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            // Puedes agregar el valor inicial aquí
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });
   // const parser = require('./parser.js');
    document.getElementById('getValueButton').addEventListener('click', () => {
        const value = editor.getValue();
        const result = parse(value);
        console.log(result);
        alert(JSON.stringify(result, null, 2));
    });
});