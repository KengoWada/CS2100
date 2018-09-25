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
    var arr = [];
    $('#createStack').click(function (event) { 
        event.preventDefault();
        if (arr.length > 0) {
            arr.splice(0, arr.length);
            $('#top').empty();
            $('#len').empty();
            $('#all').empty();
            $('#errorE').empty();
            $('#error').empty();
        }
        var stack = '[]';
        $('#errorE').empty();
        $('#error').empty();
        $('#top').empty();
        $('#len').empty();
        $('#all').empty();
        $('#display').empty();
        $('#display').append(stack);      
    });
    $('#addBtn').click(function (event) {
        event.preventDefault();
        var element = document.getElementById('element').value;
        if (element === '' || /^ *$/.test(element)) {
            $('#errorE').empty();
            $('#errorE').append('Field can not be empty or contain spaces only.');
            return;
        } else{
            arr.push(element);
        }
        $('#display').empty();
        $('#top').empty();
        $('#len').empty();
        $('#all').empty();
        $('#errorE').empty();
        $('#display').append('[' + arr + ']');
    });
    $('#popStack').click(function (event) {
        event.preventDefault();
        if (arr.length === 0) {
            $('#error').empty();
            $('#error').append('There is nothing to remove.')
        } else {
            arr.pop();
            $('#display').empty();
            $('#top').empty();
            $('#len').empty();
            $('#all').empty();
            $('#errorE').empty();
            $('#display').append('[' + arr + ']');
        }
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