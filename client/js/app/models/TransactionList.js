/**
 *
 */
class TransactionList
{
    /**
     *
     */
    constructor(context, callback)
    {
        this._transactions = [];

        this._context = context;
        this._callback = callback;
    }

    /**
     *
     */
    add(transaction)
    {
        this._transactions.push(transaction);
        // by by SOLID
        Reflect.apply(this._callback, this._context, [this]);
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
        //Reflect.apply(this._callback, this._context, [self]);
    }
}
