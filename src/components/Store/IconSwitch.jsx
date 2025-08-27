
export function IconSwitch({icon, onSwitch}) {
    return(
        <>
            <span className="material-icons" onClick={ () => {
                icon === 'lists' ? onSwitch('dashboard') : onSwitch('lists')
                console.log(icon)} }>{ icon }</span>
         </>
    )

}