import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import './index.css';
import { ReviewContextProvider } from 'components/ReviewContext/ReviewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter basename="/TeamProject03-BooksReading">
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ReviewContextProvider>
					<App />
				</ReviewContextProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
	//  </React.StrictMode>
);
