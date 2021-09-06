
import BarChart from 'components/barChart';
import DataTable from 'components/datatable';
import DunatChart from 'components/dunutChart';
import Footer from 'components/footer';
import { NavBar } from 'components/navbar';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoards de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DunatChart />
          </div>
        </div>


        <h2 className="text-primary"> Todas as vendas</h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
