import './Container.scss'

function Container(props: any) {
    //precisa adc o props.children pq esse componente vai encapsular o router na main
    return (
        <div className={`${"container"} ${[props.customClass]}`}>
            {props.children}
        </div>
    )//existe essa forma de passar classes de forma dinamica usando props
}

export default Container;