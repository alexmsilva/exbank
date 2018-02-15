/**
 *
 */
class TransactionListView extends View
{
    /**
     *
     */
    constructor(element)
    {
        super(element);
    }
    
    /**
     *
     */
    template(model)
    {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>VALUE</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${model.transactions.map(transaction => `
                    <tr>
                        <td>${DateHelper.toString(transaction.date)}</td>
                        <td>${transaction.amount}</td>
                        <td>${transaction.value}</td>
                        <td>${transaction.subtotal}</td>
                    </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.transactions.reduce((total, transaction) => total + transaction.subtotal, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}
