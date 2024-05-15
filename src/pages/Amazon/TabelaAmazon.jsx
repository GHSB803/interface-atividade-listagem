import styles from './Amazon.module.css';
import NavBar from '../../components/NavBar';
import ListaAmazon from '../../components/ListaAmazon/ListaAmazon'

function TabelaAmazon() {
    return (
        <>
            <NavBar />
            <h1  style={{marginLeft: '530px'}}>Tabela Amazon</h1>
            <ListaAmazon/>
        </>
    );
}

export default TabelaAmazon;