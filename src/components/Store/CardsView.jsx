export function CardsView({products, view }) {
    console.log(products)

    return(
        <>
            <div className={view ===  'lists' ? 'showcase-list' : 'showcase-card'}>
            {products.map((item) =>
                <div className={view ===  'lists' ? 'card' : 'row'}>
                    <div className={'card__title'}>{item.name}</div>
                    <div className={'car__color'}>{item.color}</div>
                    <img className={'card__img'} src={item.img} alt={item.img}></img>
                    <div className={'card__footer'}>
                        <div className={'card__price'}>{item.price}</div>
                        <div className={'btn'}>add to cart</div>
                        </div>

                </div>

                )}
            </div>
            {view}
        </>
    )

}