var  mapa  =  L . mapa ( 'mapa' ) . setView ( [ 37,344 , - 4,548 ] ,  8 ) ;  // Andalucía

var  osmLayer  =  L . tileLayer ( 'http: // {s} .tile.osm.org / {z} / {x} / {y} .png' ,  {
    atribución : '& copy; <a href="http://osm.org/copyright"> OpenStreetMap <\ / a> contribuyentes '
} ) . addTo ( mapa ) ;

function  popUpInfo ( característica ,  capa )  {
    // ¿esta característica tiene una propiedad llamada popupContent?
    if  ( feature . properties  &&  feature . properties . nomb_mus )  {
        capa . bindPopup ( "<b>" + feature . properties . nomb_mus + "</b> <br>" + feature . properties . municipio + "(" + feature . properties . provincia + ")" ) ;
        //layer.bindPopup ("<b>" + feature.properties.nomb_mus);
    }
}
L . geoJson ( museos ,  {
    onEachFeature : popUpInfo
    } ) . addTo ( mapa ) ;
