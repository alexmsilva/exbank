/**
 *
 */
class View
{
    /**
     *
     */
    constructor(element)
    {
        this._element = element;
    }

    /**
     * Where's the interface?
     */
    template(model)
    {
        throw new Error("The method template should be implemented.");
    }

    /**
     *
     */
    update(model)
    {
        return this._element.innerHTML = this.template(model);
    }
}
