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

        this._transactionList = new Proxy(new TransactionList(), {
            get: function(target, property, receiver) {
                // Applies Proxy to a custom method
                if (['add', 'delete'].includes(property) && typeof(target[property]) == typeof(Function)) {
                    return function() {
                        console.log(`Intercepting ${property}`);
                        Reflect.apply(target[property], target, arguments);
                        self._transactionListView.update(target);
                    }
                }

                // Just intercept a property get attribute
                return Reflect.get(target, property, receiver);
            }
        });

        this._transactionListView = new TransactionListView($('#transaction-list-view'));
        this._transactionListView.update(this._transactionList);

        this._message = new Message();
        this._messageView = new MessageView($('#message-view'));
        this._messageView.update(this._message);
    }

    /**
     *
     */
    add(event)
    {
        event.preventDefault();

        this._transactionList.add(this._createTransaction());

        this._message.text = 'Transaction successfuly added.';
        this._messageView.update(this._message);
        
        this._clearForm();
    }

    /**
     *
     */
    delete(event)
    {
        this._transactionList.delete();
        this._transactionListView.update(this._transactionList);

        this._message.text = 'Transaction List successfuly deleted.';
        this._messageView.update(this._message);
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
