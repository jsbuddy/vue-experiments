<template>
    <div class="calculator">
        <div class="result">{{ current || 0 }}</div>
        <button @click="clear" class="btn">C</button>
        <button @click="sign" class="btn">±</button>
        <button @click="percentage" class="btn">%</button>
        <button @click="operator('divide')" class="btn operator">÷</button>
        <button @click="append('7')" class="btn">7</button>
        <button @click="append('8')" class="btn">8</button>
        <button @click="append('9')" class="btn">9</button>
        <button @click="operator('multiply')" class="btn operator">x</button>
        <button @click="append('4')" class="btn">4</button>
        <button @click="append('5')" class="btn">5</button>
        <button @click="append('6')" class="btn">6</button>
        <button @click="operator('subtract')" class="btn operator">-</button>
        <button @click="append('1')" class="btn">1</button>
        <button @click="append('2')" class="btn">2</button>
        <button @click="append('3')" class="btn">3</button>
        <button @click="operator('add')" class="btn operator">+</button>
        <button @click="append('0')" class="btn zero">0</button>
        <button @click="dot" class="btn">.</button>
        <button @click="equals" class="btn operator">=</button>
    </div>
</template>

<script>
export default {
	name: 'Calculator',
	data() {
		return {
			previous: '',
			current: '',
			operation: null,
			operatorClicked: false
		};
	},
	methods: {
		append(val) {
			if (this.operatorClicked) {
				this.current = '';
				this.operatorClicked = false;
			}
			if (this.current.charAt(0) === '0') this.current = this.current.slice(1);
			this.current = `${this.current}${val}`;
		},
		dot() {
			if (this.current.indexOf('.') === -1) {
				this.append('.');
			}
		},
		operator(operator) {
			if (this.operation) this.equals();

			this.previous = this.current;
			this.operatorClicked = true;
			switch (operator) {
				case 'add':
					this.operation = (a, b) => a + b;
					break;
				case 'subtract':
					this.operation = (a, b) => a - b;
					break;
				case 'multiply':
					this.operation = (a, b) => a * b;
					break;
				case 'divide':
					this.operation = (a, b) => a / b;
					break;
			}
		},
		equals() {
			if (!this.operation) return;
			this.current = `${this.operation(parseFloat(this.previous), parseFloat(this.current))}`;
		},
		clear() {
			this.current = '';
			this.previous = '';
			this.operatorClicked = false;
			this.operation = null;
		},
		percentage() {
			this.current = `${this.current / 100}`;
		},
		sign() {
			this.current =
				this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
		}
	}
};
</script>

<style scoped lang="scss">
$width: 300px;
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Consolas, sans-serif;
	border-radius: 2px;
}

.calculator {
	width: $width;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(50px, auto);
	border-radius: 2px;
	background-color: #111;
	padding: $width/15 $width/20 $width/25;
	margin: 50px auto;
	grid-gap: 5px;

	.result {
		grid-column: 1 / 5;
		height: $width / 3;
		display: grid;
		justify-content: flex-end;
		align-content: flex-end;
		background: #333;
		margin-bottom: 5px;
		padding: 10px;
		font-size: 25px;
		color: #ddd;
	}

	.btn {
		width: ($width/4) - 12.5;
		height: ($width/4) - 12.5;
		border: 0;
		background-color: #222;
		color: #999;
		font-weight: bolder;
		font-size: 18px;
		cursor: pointer;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&:hover {
			background-color: #292929;
		}

		&.zero {
			width: ($width/2) - (18.5);
			grid-column: 1 / 3;
		}

		&.operator {
			background-color: #2c3d63;
			&:hover {
				background-color: #304770;
			}
		}
	}
}
</style>