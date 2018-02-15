/**
 *
 */
class MessageView extends View
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
        return model.text ? `<p class="alert alert-success">${model.text}</p>` : '';
    }
}
