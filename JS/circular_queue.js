class circularQueue {
	constructor (length) {
		this.queue = [];
		this.arr = [];
		this.maxLen = length;
		this.head = 0;
		this.tail = 0;
	}

	enqueue (element) {
		if (this.head === this.tail) {
			if (this.queue[this.head] === undefined) {
				this.queue[this.head] = element;
			} else {
				this.queue[this.tail + 1] = element;
				this.tail += 1;
			}
		} else if (this.head !== this.tail) {
			var nextIndex = (this.tail + 1) % this.maxLen;
			if (this.queue[nextIndex] === undefined) {
				this.queue[nextIndex] = element;
				this.tail = nextIndex;
			} else {
				console.log('Queue is full.');
				return;
			}
		}
	}

	dequeue () {
		if (this.queue[this.head] !== undefined) {
			var oldIndex = this.head;
			this.queue[this.head] = undefined;
			this.head = (oldIndex + 1) % this.maxLen; 
		} else {
			console.log('Queue is empty')
		}
	}

	allElements () {
		for ( var i = 0; i < this.queue.length; i++) {
			if (this.queue[i] !== undefined) {
				this.arr.push(this.queue[i]);
			} 
		}
		return this.arr;
	}

	len () {
		return this.arr.length;
	}

}

$(document).ready(function () {
	$('#create').click(function (event) {
		event.preventDefault();
		var max  = document.getElementById('length').value;
		var test = new circularQueue(max);
		$('#display').empty();
		$('#display').append('[' + test.queue + ']');


		$('#enqueue').click(function (event) {
			event.preventDefault();
			var element = document.getElementById('element').value;
			test.enqueue(element);
			$('#display').empty();
			$('#display').append('[' + test.queue + ']');
		});


		$('#dequeue').click(function (event) { 
			event.preventDefault();
			test.dequeue();
			$('#display').empty();
			$('#display').append('[' + test.queue + ']');
		});
	});
});