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
        let $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');

        this._transactionList = new Bind(
            new TransactionList(),
            new TransactionListView($('#transaction-list-view')),
            'add',
            'delete'
        );

        this._message = new Bind(new Message(), new MessageView($('#message-view')), 'text');
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
