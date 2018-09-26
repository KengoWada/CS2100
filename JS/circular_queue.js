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
				return 'Queue is full.'
			}
		}
	}

	dequeue () {
		if (this.queue[this.head] !== undefined) {
			var oldIndex = this.head;
			this.queue[this.head] = undefined;
			this.head = (oldIndex + 1) % this.maxLen; 
		} else {
			return 'Nothing to remove !!!'
		}
	}

	allElements () {
		this.arr.splice(0, this.arr.length);
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
		if (max === '' || /^ *$/.test(max)) {
			$('#errorEn').empty();
			$('#errorEn').append('Field can not be empty or contain spaces only.');
			return;
		} else {
			if (max <= 0) {
				$('#errorEn').empty();
				$('#errorEn').append('Number can not be 0 or less than 0.');
				return;
			}
			var test = new circularQueue(max);
			$('#top').empty();
			$('#all').empty();
			$('#len').empty();
			$('#error').empty();
			$('#errorE').empty();
			$('#errorEn').empty();
			$('#display').empty();
			$('#display').append('[' + test.queue + ']');
		}


		$('#enqueue').click(function (event) {
			event.preventDefault();
			var element = document.getElementById('element').value;
			if (element === '' || /^ *$/.test(element)) {
				$('#errorE').empty();
				$('#errorE').append('Field can not be empty or contain spaces only.');
				return;
			} else {
				var hold = test.enqueue(element);
				test.allElements();
				var l = test.len();
				if (hold === 'Queue is full.') {
					$('#errorE').empty();
					$('#errorE').append('Queue is full.');
				} else {
					$('#top').empty();
					$('#all').empty();
					$('#len').empty();
					$('#error').empty();
					$('#errorE').empty();
					$('#display').empty();
					$('#display').append('[' + test.queue + ']');
				}
			}
		});


		$('#dequeue').click(function (event) { 
			event.preventDefault();
			test.allElements();
			if (test.len() === 0) {
				$('#error').empty();
				$('#error').append('Nothing to remove !!!');
			} else {
				test.dequeue();
				test.allElements();
				$('#display').empty();
				$('#top').empty();
				$('#all').empty();
				$('#len').empty();
				$('#error').empty();
				$('#errorE').empty();
				$('#display').append('[' + test.queue + ']');
			}
		});


		$('#topMost').click(function (event) {
			event.preventDefault();
			var top = test.queue[test.head];
			$('#top').empty();
			$('#top').append(top);
		});


		$('#queueLength').click(function (event) {
			event.preventDefault();
			var l = test.len();
			if (l === 1) {
				$('#len').empty();
				$('#len').append(l + ' element');
			} else {
				$('#len').empty();
				$('#len').append(l + ' elements');
			}
		});


		$('#allElements').click(function (event) {
			event.preventDefault();
			$('#all').empty();
			$('#all').append('[' + test.arr + ']');
		});
	});
});