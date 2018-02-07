/**
 *
 */
class DateHelper
{
    /**
     *
     */
    constructor()
    {
        throw new Error("Sorry, this class can't be instantiated.");
    }

    /**
     *
     */
    static toString(date)
    {
        // interpolation
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    /**
     *
     */
    static toDate(string)
    {
        if (/\d{4}-\d{2}-\d{2}/.test(string)) {
            // worst performance, better learning
            // ... spread operator
            // arrow function
            return new Date(...string.split('-').map((item, index) => item - index % 2));
        }

        throw new Error("String date should be in yyyy-mm-dd format.")
    }
}
