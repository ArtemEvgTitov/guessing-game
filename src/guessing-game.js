class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.mid = null;
    }

    setRange(min, max) {
        if (min > max) {
            throw new Error("Минимальное значение не может быть больше максимального.");
        }
        this.min = min;
        this.max = max;
        this.mid = Math.round((this.min / 2 + this.max / 2));
    }

    guess() {
        if (this.mid === null) {
            throw new Error("Диапазон не установлен.");
        }
        return this.mid;
    }

    lower() {
        if (this.mid === null) {
            throw new Error("Не сделано предположение.");
        }
        if (this.min > this.max) {
            throw new Error("Диапазон уже сужен до одного значения.");
        }
        this.max = this.mid;
        this.mid = Math.round((this.min / 2 + this.max / 2));
    }

    greater() {
        if (this.mid === null) {
            throw new Error("Не сделано предположение.");
        }
        if (this.min > this.max) {
            throw new Error("Диапазон уже сужен до одного значения.");
        }
        this.min = this.mid;
        this.mid = Math.round((this.min / 2 + this.max / 2));
    }

    isOver() {
        return this.min === this.max;
    }
}




module.exports = GuessingGame;