import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "context/Favoritos";
import Card from "components/Card";

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
        <>
            <Banner img="favoritos" color="#44D97D" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {/* <Card id="1" titulo="Gato" capa="https://api.thecatapi.com/api/images/get?format=src&ype=png"/> */}
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />;
                })}
            </section>
        </>
    );
}

export default Favoritos;