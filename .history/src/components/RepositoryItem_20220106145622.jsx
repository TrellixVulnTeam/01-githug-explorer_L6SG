export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.respository?.name ?? 'Default'}</strong>
        <p>{props.respository.description}</p>
        <a href="">
            acessar repositorio
        </a>
    </li>
    )
}