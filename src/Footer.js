import './Footer.css';
import {ReactComponent as Market} from './media/store.svg'
import {ReactComponent as About} from './media/about.svg'
import {ReactComponent as Account} from './media/account.svg'

function Footer() {
  return (
    <>
    <div className="footer">
      <div className='first-block'>
        <Account className='account-but'/>
        <div>Account</div>
      </div>
      <div className='second-block'>
        <About className='about-but' />
        <div>About us</div>
      </div>
      <div className='third-block'>
        <Market className='market-but'/>
        <div>Market</div>
      </div>
    </div>
    </>
  );
}

export default Footer;
