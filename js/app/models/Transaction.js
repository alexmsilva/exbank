/**
 *
 */
class Transaction
{
    /**
     *
     */
    constructor(date, amount, value)
    {
        this._date = new Date(date.getTime());
        this._amount = amount;
        this._value = value;

        Object.freeze(this);
    }

    /**
     *
     */
    get date()
    {
        // defensive programming
        return new Date(this._date.getTime());
    }

    /**
     *
     */
    get amount()
    {
        return this._amount;
    }

    /**
     *
     */
    get value()
    {
        return this._value;
    }

    /**
     *
     */
    get subtotal()
    {
        return this._amount * this._value;
    }
}
