/**
 *
 */
class TransactionController
{
    /**
     *
     */
    constructor()
    {
        let self = this;
        let $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');

        this._transactionList = ProxyFactory.create(
            new TransactionList(),
            ['add', 'delete'],
            model => this._transactionListView.update(model)
        );

        this._transactionListView = new TransactionListView($('#transaction-list-view'));
        this._transactionListView.update(this._transactionList); // how to avoid this

        this._message = ProxyFactory.create(
            new Message(),
            ['text'],
            (model) => this._messageView.update(model)
        );

        this._messageView = new MessageView($('#message-view'));
        this._messageView.update(this._message); // how to avoid this
    }

    /**
     *
     */
    add(event)
    {
        event.preventDefault();

        this._transactionList.add(this._createTransaction());
        this._message.text = 'Transaction successfuly added.';
        
        this._clearForm();
    }

    /**
     *
     */
    delete(event)
    {
        this._transactionList.delete();
        this._message.text = 'Transaction List successfuly deleted.';
    }

    /**
     *
     */
    _createTransaction()
    {
        return new Transaction(
            DateHelper.toDate(this._inputDate.value),
            this._inputAmount.value, 
            this._inputValue.value
        );
    }

    /**
     *
     */
    _clearForm()
    {
        this._inputDate.value = '';
        this._inputAmount.value = 1;
        this._inputValue.value = 1;

        this._inputDate.focus();
    }
}
