
export const DondeEstamos = () => {

    return (
        <> <h4>Donde Estamos</h4>
            <iframe
                title="mapa"
                className="mt-3 d-block mx-auto"
                width="70%"
                height="300px"
                src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin,%20Ciudad%20de%20Mendoza+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </>
    )
}