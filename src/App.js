import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './sass/main.scss'
import Footer from "./components/Footer";
import Main from "./components/Main";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import CoinDetails from "./components/coinPage/CoinDetails";
import UserProvider from "./components/context/UserContext";
import Wallet from "./components/user/Wallet";

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>

                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={'/'} element={<>
                            <Main/>
                            <Footer/>

                        </>}/>
                        <Route path={'/coins/:id'} element={<>
                            <CoinDetails/>
                        </>}/>
                        <Route path={'/wallet'} element={<Wallet/>}/>

                    </Routes>
                </BrowserRouter>
            </UserProvider>

            <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
        </QueryClientProvider>
    );
}

export default App;
