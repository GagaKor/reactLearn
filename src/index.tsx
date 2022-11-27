import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/style.scss';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { HashRouter } from 'react-router-dom';
import Loader from './layouts/loader/Loader';

const container = document.getElementById('root');
const root = createRoot(container!);
function AppWithCallbackAfterRender() {
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <App></App>
      </HashRouter>
    </Suspense>
  );
}
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
