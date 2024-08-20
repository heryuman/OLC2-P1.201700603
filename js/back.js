/**
 * seccion de carga de monaco
 * 
 */
let editor;
 require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.38.0/min/vs' }});
 require(['vs/editor/editor.main'], function() {
      editor=monaco.editor.create(document.getElementById('editor'), {
         value: [
          
         ].join('\n'),
         language: 'javascript',
         theme:'vs-dark'
     });
 });



document.getElementById('getValueButton').addEventListener('click', () => {
    const value = editor.getValue();
    //const value="mensaje de getvalor"
    alert(value);
});