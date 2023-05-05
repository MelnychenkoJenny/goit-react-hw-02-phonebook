
export const Contacts = ({contacts, onDeleteContact}) => {
    return (
        
        <ul>
{contacts.map(({id, name, number}) => <li key={id}>
    <p>{name}</p>
    <p>{number}</p>
    <button onClick={()=> onDeleteContact(id)}>Видалити</button>
</li>)}
        </ul>
        
    )
}