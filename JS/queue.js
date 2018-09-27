class Queue {
    constructor () {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue (element) {
        if (this.tail < 12) {
            this.queue[this.tail] = element;
            this.tail += 1;
        } else {            
            return;
        }
    }

    dequeue () {
        if (this.head < 12 && this.head !== this.tail) {
            this.queue[this.head] = undefined;
            this.head += 1;
        } else {
            this.tail = 0;
            this.head = 0;
            this.queue.splice(0, 12);
            return 'Nothing to delete';
        }
    }

    tailElement () {
        return this.queue[this.tail - 1];
    }

    size () {
        var len = this.queue.length;
        for (var i = 0; i < this.queue.length; i++) {
            if (this.queue[i] === undefined) {
                len -= 1;
            }
        }
        return len;
    }

    allElements () {
        var newQ = [];
        for (var i = 0; i < this.queue.length; i++) {
            if (this.queue[i] !== undefined) {
                newQ.push(this.queue[i]);
            }
        }
        return newQ;
    }
}

$(document).ready(function () {    
    $('#createQueue').click(function (event) {
        event.preventDefault();
        var test = new Queue();
        var newQ = '[]';
        $('#top').empty();
        $('#len').empty();
        $('#all').empty();
        $('#error').empty();
        $('#error').empty();
        $('#display').empty();
        $('#display').append(newQ);


        $('#enqueue').click(function (event) {
            event.preventDefault();
            var element = document.getElementById('element').value;
            if (element === '' || /^ *$/.test(element)) {
                $('#errorE').empty();
                $('#errorE').append('Field can not be empty or contain spaces only.')
            } else{
                if (test.queue.length < 12) {
                    test.enqueue(element);
                    $('#top').empty();
                    $('#len').empty();
                    $('#all').empty();
                    $('#error').empty();
                    $('#errorE').empty();
                    $('#display').empty();
                    $('#display').append('[' + test.queue + ']');
                } else if (test.queue.length === 12) {
                    var error = 'The queue is full !!!';
                    $('#errorE').empty();
                    $('#display').empty();
                    $('#display').append('[' + test.queue + ']');
                    $('#errorE').append(error);
                }
            }
        });


        $('#dequeue').click(function (event) {
            event.preventDefault();
            if (test.size() > 0) {
                test.dequeue()
                $('#top').empty();
                $('#len').empty();
                $('#all').empty();
                $('#display').empty();
                $('#error').empty();
                $('#errorE').empty();
                $('#display').append('[' + test.queue + ']');
            } else if (test.size() === 0) {
                test.dequeue();
                var error = test.dequeue();
                $('#error').empty();
                $('#display').empty();
                $('#display').append('[' + test.queue + ']');
                $('#error').append(error);
            }
        });


        $('#topMost').click(function (event) {
            event.preventDefault();
            var top = test.tailElement();
            $('#top').empty();
            $('#top').append(top);
        });
    

        $('#queueLength').click(function (event) {
            event.preventDefault();
            var len = test.size();
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
            $('#all').append('[' + test.allElements() + ']');
        });
    });    
});