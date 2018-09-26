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
        return this.stack[this.stack.length - 1];
    }

    len() {
        return this.stack.length;
    }

    allElements() {
        return this.stack;
    }
}


$(document).ready(function () {
    $('#createStack').click(function (event) { 
        event.preventDefault();
        var test = new Stack();
        $('#error').empty();
        $('#errorE').empty();
        $('#top').empty();
        $('#all').empty();
        $('#len').empty();
        $('#display').empty();
        $('#display').append('[' + test.stack + ']');


        $('#addBtn').click(function (event) {
            event.preventDefault();
            var element = document.getElementById('element').value;
            if (element === '' || /^ *$/.test(element)) {
                $('#errorE').empty();
                $('#errorE').append('Field can not be empty or contain spaces only.');
                return;
            } else {
                test.push(element);
                $('#error').empty();
                $('#errorE').empty();
                $('#top').empty();
                $('#all').empty();
                $('#len').empty();
                $('#display').empty();
                $('#display').append('[' + test.stack + ']');
            }
        });


        $('#popStack').click(function (event) { 
            event.preventDefault();
            if (test.len() === 0 ) {
                $('#errorE').empty();
                $('#top').empty();
                $('#all').empty();
                $('#len').empty();
                $('#error').empty();
                $('#error').append('Stack is empty.');
                return;
            } else {
                test.pop();
                $('#error').empty();
                $('#errorE').empty();
                $('#top').empty();
                $('#all').empty();
                $('#len').empty();
                $('#display').empty();
                $('#display').append('[' + test.stack + ']');
            }
        });


        $('#topMost').click(function (event) { 
            event.preventDefault();
            $('#top').empty();
            $('#top').append(test.topMost());
        });


        $('#arrLength').click(function (event) { 
            event.preventDefault();
            if (test.len() === 1) {
                $('#len').empty();
                $('#len').append(test.len() + ' element');
            } else {
                $('#len').empty();
                $('#len').append(test.len() + ' elements');
            }
        });


        $('#allElements').click(function (event) { 
            event.preventDefault();
            $('#all').empty();
            $('#all').append('[' + test.allElements() + ']');
        });
    });
});