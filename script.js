const button  = document.querySelector('button');
button.addEventListener('click',() =>{
    button.textContent = "You Signed Up!";
});
 var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    matchBrackets: true
});


function runCode() {
    var userCode = editor.getValue();
    try {
        eval(userCode);
    } catch (e) {
        alert('Error: ' + e.message);
    }
}
