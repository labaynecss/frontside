import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const SalesReport = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/sales-stats" className="btn-dark">
          Statistics <i className="bi bi-plus"></i>
        </Link>
      </ScreenHeader>
      <>
        <div className="sales">
          <div>
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: 'bg-gray-900',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: '2px',
                    width: '100%',
                    height: '350px',
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63f00885-26ab-4a12-839b-981f33283c47&maxDataAge=300&theme=dark&autoRefresh=true"></iframe>
              </div>
            </article>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default SalesReport;
