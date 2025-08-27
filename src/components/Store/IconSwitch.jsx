
export function IconSwitch({icon, onSwitch}) {
    return(
        <>
            <div className={'switch'}>
            <span className="material-icons" onClick={ () => {
                icon === 'lists' ? onSwitch('dashboard') : onSwitch('lists')
                console.log(icon)} }>{ icon }</span>
                </div>
         </>
    )

}