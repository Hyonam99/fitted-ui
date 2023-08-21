import { SideNav, TopHeader } from 'components/components-export';
import './App.scss';
import Dashboard from 'pages/dashboard/Dashboard';

const App = () => {
  return (
    <section className="fitted-app">
		<main>
			<section className='fitted-app_side-nav'>
				<SideNav />
			</section>
			<section className='fitted-main-section'>
				<header><TopHeader /></header>
				<section className='fitted-main-section_display-content'><Dashboard /></section>
			</section>
		</main>
    </section>
  );
}

export default App;
