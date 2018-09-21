class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        this.stack.pop();
    }

    topMost() {
        return this.stack[-1];
    }

    length() {
        return this.stack.length;
    }

    allElements() {
        return this.stack;
    }
}


$(document).ready(function () {
    $('#createStack').click(function (event) { 
        event.preventDefault();
        var stack = '[]';
        $('#display').empty();
        $('#display').append(stack);      
    });
    var arr = [];
    $('#addBtn').click(function (event) {
        event.preventDefault();
        var element = document.getElementById('element').value;
        if (element === '' || /^ *$/.test(element)) {
            return;
        } else{
            arr.push(element);
        }
        $('#display').empty();
        $('#display').append('[' + arr + ']');
    });
    $('#popStack').click(function (event) {
        event.preventDefault();
        arr.splice(-1, 1);
        $('#display').empty();
        $('#display').append('[' + arr + ']');
    });
    $('#topMost').click(function (event) {
        event.preventDefault();
        var top = arr[(arr.length) - 1];
        $('#top').empty();
        $('#top').append(top);
    });
    $('#arrLength').click(function (event) {
        event.preventDefault();
        var len = arr.length;
        $('#len').empty();
        if (len === 1){
            $('#len').append(len + ' Element');
        } else {
            $('#len').append(len + ' Elements');
        }
    });
    $('#allElements').click(function (event) {
        event.preventDefault();
        $('#all').empty();
        $('#all').append('[' + arr + ']');
    });
});