/**
 *
 */
class TransactionList
{
    /**
     *
     */
    constructor(callback)
    {
        this._transactions = [];
        this._callback = callback; // to update
    }

    /**
     *
     */
    add(transaction)
    {
        this._transactions.push(transaction);
        // by by SOLID
        this._callback(this);
    }

    /**
     *
     */
    get transactions()
    {
        return [].concat(this._transactions);
    }

    /**
     *
     */
    delete()
    {
        this._transactions = [];
        // by by SOLID
        this._callback(this);
    }
}
